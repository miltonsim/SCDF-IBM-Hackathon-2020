# Backend Applications
The backend applications consist of 2 ML containers, 3 aws lambda functions and a IBM cloud function to trigger the ML containers.

## Backend Workflow 
1. CCTVs stream video footage to Cloud Object Storage
2. Cloud Object Storage (COS) triggers Cloud Function with COS Trigger Function
3. Cloud Function (Python) utilises boto3 to call ECS and create two new tasks.
4. ECS creates two new tasks spwans the ML containers, Firenet and Fallnet.
5. The Docker container consumes the video which is located in COS and processes it with Machine Learning
6. Upon detection of fire or a person falling, ECS triggers the React website
7. React website displays the video of the fire or a person falling.
8. React website retrieves information about the CCTV through an API which uses API Gateway, Lambda and DynamoDB