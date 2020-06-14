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
[![Pitch Video on Youtube](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Architecture
![Solution Architecture](https://github.com/lkldev/SCDF-IBM/blob/master/resources/solution-architecture.png)

## Detailed Solution
Check out this [link](https://github.com/lkldev/BLMNK-EyeNet_SCDFXIBM/blob/master/resources/detailed-solution.md) for more descriptions

## Project Roadmap
![Project Roadmap](https://github.com/lkldev/SCDF-IBM/blob/master/resources/project-roadmap.png)

## Getting Started

### Requirements
1. Mapbox Account - Get a Token
2. IBM Account - Cloud Object Storage to hold to Video Footages

### Set Up
1. Clone this current Repo
2. Create .env at the frontend folder with the following information:
   - REACT_APP_MAPBOX_TOKEN
   - REACT_APP_IBM_ACCESSKEY
   - REACT_APP_IBM_SAKEY
   - REACT_APP_IBM_ENDPOINT
   - REACT_APP_IBM_SIID
   - REACT_APP_IBM_SIID
3. In the frontend folder, run `npm start` to run the website

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
