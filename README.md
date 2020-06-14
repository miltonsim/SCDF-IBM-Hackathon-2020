# SCDF x IBM (EyeNet)
Welcome to EyeNet

## Our Team - BLMNK 
<img src="https://github.com/lkldev/SCDF-IBM/blob/master/resources/logo.jpg" width="100" height="100" />

Member | Role
------ | -----
Bryan Tan | Frontend Developer
Chia Li Yun | Frontend Developer
Milton Sim | Cloud Architect
Li Kang Li | Backend Developer
Nigel Chen | Backend Developer

## Description
Problem Statement: **Integrating with a smart environment**

Our solution plans to tap on the expansive network of CCTVs in Singapore to detect fires and falls using the power of Machine Learning (ML). 

In an unfortunate situation when a fire is detected, an immediate notification would be sent to the HQ with a live feed of the fire, allowing the commanders to make crucial decisions such as how many firefighters should be dispatched, what type of fire equipments would be effective.

Moreover, a notification will also be sent with the live feed when the ML has detected a person who has fell, enabling SCDF to scramble the appropriate resources to provide aid. 

This solution hopes to reduce the time taken to respond to a fire threat, reduce casualties and possible financial losses.

The serverless solution leverages on the power of cloud computing and its architecture allows it to scale almost infintely and making processing of millions of CCTV video footages simultaneously a reality. 

## Pitch Video
[![Pitch Video on Youtube](https://img.youtube.com/vi/0tg1vRz53QE/0.jpg)](https://youtu.be/0tg1vRz53QE)

## Architecture
![Solution Architecture](https://github.com/lkldev/SCDF-IBM/blob/master/resources/solution-architecture.png)

## Detailed Solution
Check out this [link](https://github.com/lkldev/BLMNK-EyeNet_SCDFXIBM/blob/master/resources/detailed-solution.md) for more descriptions

## Project Roadmap
![Project Roadmap](https://github.com/lkldev/SCDF-IBM/blob/master/resources/project-roadmap.png)

## Getting Started

### Requirements
1. Mapbox Account - API Token for Map
2. IBM Account - Cloud Object Storage (COS) and Cloud Functions
3. AWS Account - Dynamodb, API Gateway, ECS, Lambda

### Frontend Set Up
1. Clone this current Repo
2. Create .env at the frontend folder with the following information:
   - REACT_APP_MAPBOX_TOKEN (Mapbox token)
   - REACT_APP_IBM_ACCESSKEY (IBM Access Key for COS)
   - REACT_APP_IBM_SAKEY (IBM Secret Access Key for COS)
   - REACT_APP_IBM_ENDPOINT (IBM Endpoint for COS)
   - REACT_APP_IBM_SIID (IBM Service Instance ID for COS)
   - REACT_APP_IBM_BUCKET (IBM Bucket name for COS)
3. In the frontend folder, run `npm start` to run the website

### Backend Set Up
1. Create and setup Object Storage, Cloud Functions on IBM Account
2. Create and setup Dynamodb, API Gateway, ECS, Lambda on AWS Account

## Live Demo
[EyeNet](http://chialiyun.github.io/eyenet)

[![Live Demo Video](https://img.youtube.com/vi/ZC9FDSDolbM/0.jpg)](https://youtu.be/ZC9FDSDolbM)

## Technology Used
1. React (Displays front-end website)
2. Docker (Containerise ML for deployment) 
2. IBM Cloud 
   - Cloud Object Storage (Stores video footages)
   - Cloud Function (Triggers ECS task to run upon uploading of video footage)
3. Amazon Web Service (AWS)
   - API Gateway (Exposes an API for the website to access)
   - Lambda (Retrieves and process informations
   - DynamoDB (Stores information for the solution)
   - Elastic Container Service (Runs on demand when video footages are submitted, creating ML Docker containers to detect fires)
