"""
Описание логики, используемой в API
для загрузки и выгрузки изображений с сервера
"""
import os
import base64
import shutil
from datetime import datetime, timezone
from PIL import Image, UnidentifiedImageError
from fastapi import Depends, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy import insert
from backend.src.app.settings import settings
from backend.src.app import tables
from backend.src.app.database import Session, get_session
from .utils import sizeof_fmt


class FileService:

    """
    Класс FileService для загрузки и выгрузки изображений
    """
    def __init__(self, session: Session = Depends(get_session)):
        """
        Конструктор

        Принимает объект сессии session класса Session

        Возвращает None
        """
        self.session = session

    def upload(self, file: UploadFile):
        """
        Метод загрузки изображения на сервер

        Принимает объект файла изображения file класса UploadFile

        Возвращает статус загрузки-объект класса dict
        """
        curent_dt = datetime.now(timezone.utc)
        prefix = str(curent_dt).replace(' ', '')\
            .replace('.', '')\
            .replace(':', '')
        temp_path = settings.media_temp+prefix+file.filename
        temp_path_preview = settings.media_temp+prefix+"preview"+file.filename
        try:
            with open(temp_path, "wb") as buffer:
                shutil.copyfileobj(file.file, buffer)
                img = Image.open(temp_path)
                width, height = img.size
                quotient = width/height
                img_preview = img.resize((int(256*quotient), 256))
                img_preview.save(temp_path_preview)
                size = os.path.getsize(temp_path)
                humansize = sizeof_fmt(size)
                image_type = tables.Types(img.format.lower())
                img.close()
        except UnidentifiedImageError:
            buffer.close()
            os.remove(temp_path_preview)
            os.remove(temp_path)
            return {"msg": "Something is wrong with your file",
                    "bad_file": file.filename}
        except ValueError:
            buffer.close()
            os.remove(temp_path_preview)
            os.remove(temp_path)
            return {"msg": "Not supported image image_",
                    "bad_file": file.filename}

        with open(temp_path_preview, 'rb') as img:
            preview = base64.b64encode(img.read())
            img.close()
            os.remove(temp_path_preview)

        path = settings.media_storage+prefix+file.filename
        file_data = tables.Image(__tablename__='images',
                                 filename=prefix+file.filename,
                                 date_time=curent_dt,
                                 width=width,
                                 height=height,
                                 size=size,
                                 human_size=humansize,
                                 type=image_type,
                                 preview=preview,
                                 browser_metadata={"default": 0},
                                 filepath=path)
        self.session.add(file_data)
        self.session.commit()

        shutil.move(temp_path, settings.media_storage)
        return {"msg": "OK", "good_file": file.filename}

    def download(self, filename):
        """
        Метод загрузки избражения с сервера

        Принимает имя файла filename класса str

        Возвращает объект класса FileResponse в случае успешной загрузку и
        объект класса dict с информацией об ошибке в случае ошибки
        """
        images = os.listdir(settings.media_storage)
        response = None
        if filename in images:
            response = FileResponse(settings.media_storage+filename,
                                    filename=filename)
        else:
            response = {"msg": "Image not found", "file": filename}
        return response
