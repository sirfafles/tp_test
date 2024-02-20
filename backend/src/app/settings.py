"""
Файл настроек
"""
from pydantic import BaseSettings


class Settings(BaseSettings):
    """
    Записанные параметры
    """
    server_host: str   = '0.0.0.0'
    server_port: int  # = 8000
    database_url: str  # ='sqlite:///./test.db'
    media_storage: str  # ='./src/images/'
    media_temp: str  # ='./src/temp'


settings = Settings(
    _env_file='backend/.env',
    _env_file_encoding='utf-8'
)
