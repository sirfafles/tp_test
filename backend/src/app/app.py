"""
Настройки приложения
"""
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from PIL import Image
from backend.src.app import api
app = FastAPI()

Image.MAX_IMAGE_PIXELS = None

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
    )

app.include_router(api.router)
