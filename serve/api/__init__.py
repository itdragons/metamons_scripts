from fastapi import APIRouter

from api import index, user, beatstars

api_router = APIRouter()
api_router.include_router(index.router, tags=['index'])
api_router.include_router(user.router, tags=['user'], prefix='/user')
api_router.include_router(beatstars.router, tags=['beatstars'], prefix='/beatstars')
