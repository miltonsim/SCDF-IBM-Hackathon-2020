# SCDF x IBM

## Team BLMNK <img src="https://github.com/lkldev/SCDF-IBM/blob/master/resouces/logo.jpg" width="80" height="80" />


Member | Role
------ | -----
Bryan | Frontend Developer
Chia Li Yun | Frontend Developer
Li Kang Li | Data Analyst
Milton | Cloud Architect
Nigel | Data Analyst

## Description
Selected Problem Statement: INTEGRATING WITH A SMART ENVIRONMENT

<SHORT DESCRIPTION HERE of the problem you are tackling, how technology can help, as
well as the idea your team is proposing>

### Frontend Application
SCDF Officer will interact with this website to access real time video footages of camera around Singapore. Notification are made available to the user to alert them of any fire detected in the backend.

Users can also view the various AED devices across the island. 

* For demonstration purposes, there is an additional page to upload the "fire footage" to simulate the actual CCTV video streaming being sent up to IBM Cloud Object Storage. The footage would then be analysed for fire. Once fire is detected, the frontend will be notified to show alert for our SCDF Officers. From there, the SCDF Officers can click onto the alert and view the video footage and determine the intensity of the fire. Having able to view the situation remotely, the SCDF Officers would be able to better allocate sufficent necessary emergency resource to resolve the issue in an efficient manner. 

## Pitch Video

## Architecture
![Solution Architecture](https://github.com/lkldev/SCDF-IBM/blob/master/resouces/architecture.jpeg)

## Detailed Solution

## Project Roadmap
not compulsory

## Getting Started

## Technology Used
1. React for Frontend
2. IBM Cloud 
   - Cloud Object Storage (for Storage of Video Footages)
   - Cloud Function
3. AWS Cloud
   - API Gateway (for Backend)
   - Lambda
   - ECS
   - DynamoDB (for Database)
4. Docker
