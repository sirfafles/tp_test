"""
Описание API для загрузки и выгрузки файлов
"""
from typing import List, Any
from fastapi import APIRouter, UploadFile, File, Depends
from backend.src.app.services.files_services import FileService

router = APIRouter(
    prefix=""
)


@router.post('/upload')
def upload(files: List[UploadFile] = File(...),
           service: FileService = Depends()) -> List[dict]:

    """
    API на загрузку изображения на сервер и записи информации о нем в БД

    Принимает список files объектов файлов класса UploadFile
    и объект сервиса service класса FileService

    Возвращает список статусов загрузки responses объектов класса dict
    """

    responses = []
    for file in files:
        responses.append(service.upload(file))
    return responses


@router.get('/download_{filename}')
def download(file_name: str, service: FileService = Depends()) -> Any:

    """
    API на загрузку изображения с сервера

    Принимает имя файла file_name класса str
    и объект сервиса service класса FileService

    Возвращает объект класса FileResponse в случае успешной загрузку и
    объект класса dict с информацией об ошибке в случае ошибки
    """

    return service.download(filename=file_name)
