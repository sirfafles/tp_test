"""
Файл пакета API
"""
from fastapi import APIRouter
from . import (
    files,
    read
)

router = APIRouter()
router.include_router(files.router)
router.include_router(read.router)
