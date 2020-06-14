FROM ubuntu:18.04
WORKDIR /app
RUN apt update 
RUN apt install -y libsm6 libxext6 libxrender1
RUN apt install -y python3 python3-pip
RUN pip3 install imutils opencv-python numpy requests boto3
COPY . /app
CMD python3 yolo_video.py --yolo yolo-coco
