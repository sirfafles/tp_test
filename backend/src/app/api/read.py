"""
Описание API для получения списка файлов из БД
"""
from typing import List, Optional
from datetime import datetime
from fastapi import APIRouter, Depends
from backend.src.app.services.read_services import ReadService
from backend.src.app.models.image import ImageModel
from backend.src.app import tables

router = APIRouter(
    prefix=""
)


@router.get("/read")
def read(
         date_from: Optional[datetime] = None,
         date_to: Optional[datetime] = None,
         file_format: Optional[tables.Types] = None,
         size_from: Optional[int] = None,
         size_to: Optional[int] = None,
         readservice: ReadService = Depends()
) -> List[ImageModel]:
    """
    API для поиска файлов по фильтрам

    Принимает объект сервиса readservice класса Readservice
    и критерии фильтрации:
        date_from: нижняя граница даты,
        date_to: верхняя граница даты,
        file_format: формат файла,
        size_from: нижняя граница размера,
        size_to: верхняя граница размера,

    Возвращает список объектов модели ImageModel
    """
    return readservice.read(date_from,
                            date_to,
                            file_format,
                            size_from,
                            size_to)
