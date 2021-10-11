from db.session import session
from models.models import User


def get_users():
    return session.query(User).all()
