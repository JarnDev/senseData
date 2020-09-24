FROM tiangolo/uwsgi-nginx-flask:python3.8

LABEL maintainer="Alfredo Neto"
LABEL version="Alfredo Neto"
LABEL description="Container para o backend flask"

COPY ./app /app

RUN pip install -r /app/requirements.txt
