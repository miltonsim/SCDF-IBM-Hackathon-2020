# Detailed Solution

## Solution Architecture
![Solution Architecture](https://github.com/lkldev/SCDF-IBM/blob/master/resources/solution-architecture.jpeg)

## Solution Description
Problem Statement: **Integrating with a smart environment**

Our solution plans to tap on the expansive network of CCTVs in Singapore to detect fires and falls using the power of Machine Learning (ML).

In an unfortunate situation when a fire is detected, an immediate notification would be sent to the HQ with a live feed of the fire, allowing the commanders to make crucial decisions such as how many firefighters should be dispatched, what type of fire equipments would be effective.

Moreover, a notification will also be sent with the live feed when the ML has detected a person who has fell, enabling SCDF to scramble the appropriate resources to provide aid.

This solution hopes to reduce the time taken to respond to a fire threat, reduce casualties and possible financial losses.

## Website
This website acts as a dashboard which will be displayed in the SCDF HQ. In event of a calamity such as when a fire has broken out, a notification will be received and immediately, real-time video footage of the current situation will be shown on the website.

Not only does the footage provide crucial information such as the intensity of the fire so that the fire can be contained immediately and effectively, it also allows SCDF Officers to analyse the fire from a safe distance.
 
## Backend Workflow 
1. CCTVs stream video footage to Cloud Object Storage
2. Cloud Object Storage (COS) triggers Cloud Function with COS Trigger Function
3. Cloud Function (Python) utilises boto3 to call ECS and create a new task 
4. ECS creates a new task which spawns a Docker container
5. The Docker container consumes the video which is located in COS and processes it with Machine Learning (Python)
6. Upon detection of fire or a person falling, ECS triggers the React website
7. React website displays the video of the fire or a person falling.
8. React website retrieves information about the CCTV through an API which uses API Gateway, Lambda and DynamoDB

## Proof-Of-Concept (POC) Architecture
![POC Architecture](https://github.com/lkldev/SCDF-IBM/blob/master/resources/poc-architecture.png)

## POC Description
Due to the inherent nature of CCTVs, during the hackathon, we are unable to obtain a CCTV and stream its content to the COS. 

As such, for the showcase, we will be using a test video to simulate the CCTV footage and our solution mechanism which involves the detection of fire and perosn falling using ML and notification.
