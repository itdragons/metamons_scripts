from typing import List

from pydantic import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = 'py_script'
    BACKEND_CORS_ORIGINS: List = ['*']
    API_V1_STR: str = "/v1"


settings = Settings()
