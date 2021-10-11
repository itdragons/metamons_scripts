from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from configuration.config_helper import get_database_config

db_config = get_database_config()

DB_URI = "mysql+pymysql://{username}:{password}@{host}:{port}/{db}?charset=utf8" \
    .format(username=db_config.get("USERNAME"), password=db_config.get("PASSWORD"), host=db_config.get("HOST"),
            port=db_config.get("PORT"), db=db_config.get("DB"))

engine = create_engine(DB_URI, echo=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

session = SessionLocal()

Base = declarative_base()
