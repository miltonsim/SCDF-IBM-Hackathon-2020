# Detailed Solution

## Solution Architecture
![Solution Architecture](https://github.com/lkldev/SCDF-IBM/blob/master/resources/solution-architecture.jpeg)

## Solution Description
Problem Statement: **Integrating with a smart environment**

Our solution plans to tap on the expansive network of CCTVs in Singapore to detect fires using the power of Machine Learning. 

In event that a fire is detected, an immediate notification would be sent to the HQ with a live feed of the fire, allowing the commanders to make crucial decisions such as how many firefighters should be dispatched, what type of fire equipments would be effective.

This solution hopes to reduce the time taken to respond to a fire threat, reducing casualties and possible financial losses. 

## Application
SCDF Officer will interact with this website (in React) to access real time video footages of camera around Singapore. Notification are made available to the user to alert them of any fire detected in the backend.

Users can also view the various AED devices across the island. 

* For demonstration purposes, there is an additional page to upload the "fire footage" to simulate the actual CCTV video streaming being sent up to IBM Cloud Object Storage. The footage would then be analysed for fire. Once fire is detected, the frontend will be notified to show alert for our SCDF Officers. From there, the SCDF Officers can click onto the alert and view the video footage and determine the intensity of the fire. Having able to view the situation remotely, the SCDF Officers would be able to better allocate sufficent necessary emergency resource to resolve the issue in an efficient manner. 

## Workflow 
1. CCTVs stream video footage to Cloud Object Storage
2. Cloud Object Storage (COS) triggers Cloud Function with COS Trigger Function
3. Cloud Function (Python) utilises boto3 to call ECS and create a new task 
4. ECS creates a new task which spawns a Docker container
5. The Docker container consumes the video which is located in COS and processes it with Machine Learning (Python)
6. Upon detection of fire, ECS triggers the React website
7. React website displays the video of the fire
8. React website retrieves information about the CCTV through an API which uses API Gateway, Lambda and DynamoDB

## Proof-Of-Concept (POC) Architecture
![POC Architecture](https://github.com/lkldev/SCDF-IBM/blob/master/resources/poc-architecture.png)

## POC Description
Due to the inherent nature of CCTVs, during the hackathon, we are unable to obtain a CCTV and stream its content to the COS. 

As such, for the showcase, we will be using a test video to simulate the CCTV footage and our solution mechanism which involves the detection of fire using ML and notification.
