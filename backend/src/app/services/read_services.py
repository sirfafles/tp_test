"""
Описание логики, используемой в API
для получения списка изображений по фильтрам
"""
from fastapi import Depends
from backend.src.app import tables
from backend.src.app.database import Session, get_session


class ReadService():

    """
    Класс ReadService для поиска избражений по фильтрам
    """
    def __init__(self, session: Session = Depends(get_session)):

        """
        Конструктор

        Принимает объект сессии session класса Session

        Возвращает None
        """
        self.session = session

    def read(self, date_from, date_to, file_format, size_from, size_to):
        """
        Метод для поиска избражений по фильтрам

        Принимает критерии фильтрации:
            date_from: нижняя граница даты,
            date_to: верхняя граница даты,
            file_format: формат файла,
            size_from: нижняя граница размера,
            size_to: верхняя граница размера,

        Возвращает список записей из БД, соответствующих критериям
        """
        query = self.session.query(tables.Image)
        if date_from is not None:
            query = query.filter(tables.Image.date_time > date_from)
        if date_to is not None:
            query = query.filter(tables.Image.date_time < date_to)
        if file_format is not None:
            query = query.filter(tables.Image.type == file_format)
        if size_from is not None:
            query = query.filter(tables.Image.size > size_from)
        if size_to is not None:
            query = query.filter(tables.Image.size < size_to)
        return query.all()
