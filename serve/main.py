import uvicorn
from fastapi import FastAPI
from loguru import logger
from starlette.middleware.cors import CORSMiddleware
from conf.config import settings
from configuration import config_provider
from configuration.config_helper import get_config_file


def create_app(conf_file=None):
    config_provider.reload(get_config_file(conf_file))
    app = FastAPI(
        title=settings.PROJECT_NAME,
        openapi_url=f'{settings.API_V1_STR}/openapi.json'
    )
    # CORS
    if settings.BACKEND_CORS_ORIGINS:
        app.add_middleware(
            CORSMiddleware,
            allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )
    from api import api_router
    app.include_router(api_router, prefix=settings.API_V1_STR)
    logger.add(sink='../logs/log.log', rotation="00:00", level="INFO")
    return app


if __name__ == '__main__':
    uvicorn.run(app='main:create_app', host="0.0.0.0", port=8000, reload=True, debug=True)
