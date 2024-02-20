FROM ubuntu
RUN apt-get update
RUN apt-get install -y python3
RUN mkdir /fastapi_app/
RUN mkdir /fastapi_app/backend/
WORKDIR /fastapi_app/backend/
COPY requirements.txt .
RUN set -xe \
    && apt-get update -y \
    && apt-get install -y python3-pip
RUN pip install --upgrade pip
RUN pip install -r ./requirements.txt
COPY . .
WORKDIR /fastapi_app/
EXPOSE 8000
EXPOSE 6000
CMD ["python3", "-m", "backend"]