"""
Файл запуска backend
"""
import uvicorn
from backend.src.app.settings import settings

uvicorn.run(
    "backend.src.app.app:app",
    host=settings.server_host,
    port=settings.server_port,
    reload=True
)
