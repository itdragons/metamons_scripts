FROM python:3.7.10-slim-stretch

WORKDIR /app

COPY docker/pip.conf /etc/pip.conf

COPY poetry.lock pyproject.toml ./

RUN pip install poetry; \
    poetry config virtualenvs.create false ;\
    poetry export --without-hashes -f requirements.txt > requirements.txt ;\
    pip install -r requirements.txt

COPY . .

CMD ["python", "/app/main.py"]