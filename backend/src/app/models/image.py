"""
Описание модели для валидации данных в БД
"""

from typing import Optional
from datetime import datetime
from pydantic import BaseModel
from backend.src.app.tables import Types


class ImageModel(BaseModel):
    """
    Модель данных излбражения
    """
    id: int
    filename: str
    date_time: datetime
    width: int
    height: int
    size: int
    type: Types
    preview: str
    browser_metadata: dict
    filepath: str
    human_size: Optional[str]

    class Config:

        """
        Подключение ORM 
        """
        orm_mode = True
