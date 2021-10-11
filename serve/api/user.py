from fastapi import APIRouter
from services.user import get_users

router = APIRouter()


@router.get('/')
async def user():
    us = get_users()
    return us
