FROM tensorflow/tensorflow:1.15.2

RUN apt-get update
RUN apt-get install -y libsm6 libxext6 libxrender-dev
RUN apt-get install -y xvfb xserver-xephyr vnc4server xfonts-base

WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt

CMD python firenet.py
