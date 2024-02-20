"""
Создание таблицы данных
"""
import enum
from datetime import datetime, timezone
import sqlalchemy as sa
from sqlalchemy.orm import declarative_base
from sqlalchemy import MetaData

convention = {
    'all_column_names': lambda constraint, table: '_'.join([
        column.name for column in constraint.columns.values()
    ]),
    'ix': 'ix__%(table_name)s__%(all_column_names)s',
    'uq': 'uq__%(table_name)s__%(all_column_names)s',
    'ck': 'ck__%(table_name)s__%(constraint_name)s',
    'fk': (
        'fk__%(table_name)s__%(all_column_names)s__'
        '%(referred_table_name)s'
    ),
    'pk': 'pk__%(table_name)s'
}

metadata = MetaData(naming_convention=convention)

Base = declarative_base()


class Types(enum.Enum):
    """
    Описание поддерживаемых расширений
    """
    webp = 'webp'
    jpeg = 'jpeg'
    tiff = 'tiff'
    bmp = 'bmp'
    png = 'png'


class Image(Base):
    """
    Таблица Изображений
    """
    __tablename__ = 'images'
    metadata = metadata
    id = sa.Column(sa.Integer, autoincrement=True, primary_key=True)
    filename = sa.Column(sa.Text, unique=True)
    date_time = sa.Column(sa.DateTime, default=datetime.now(timezone.utc))
    width = sa.Column(sa.Integer)
    height = sa.Column(sa.Integer)
    size = sa.Column(sa.Integer)
    human_size = sa.Column(sa.Text)
    type = sa.Column(sa.Enum(Types))
    preview = sa.Column(sa.Text)
    browser_metadata = sa.Column(sa.JSON, nullable=True)
    filepath = sa.Column(sa.Text)
