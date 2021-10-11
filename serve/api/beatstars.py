from fastapi import APIRouter

router = APIRouter()


@router.get('/run')
async def run(page: int = 0,
              page_size: int = 10,
              runs: int = 1):
    return {
        page: page,
        page_size: page,
        runs: runs,
    }
