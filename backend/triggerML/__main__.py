import boto3

endpoint = "IBM Cloud Endpoint to download the files from"

def triggerML(params):
    client = boto3.client(
        'ecs',
        aws_access_key_id="<AWS ACCESS KEY ID>",
        aws_secret_access_key="<SECRET ACCESS KEY",
        region_name="<AWS REGION>"
    )

    if 'key' in params:
        key = params['key']
        filelink = "{}/{}".format(endpoint, key)
        print(filelink, key)
    
    response = client.run_task(
        launchType = 'FARGATE',
        cluster='<Cluster name>',
        count = 1,
        overrides={
            'containerOverrides': [
                {
                    'name': 'firenet',
                    'environment': [
                        {
                            'name': 'FILEURL',
                            'value': filelink
                        },
                        {
                            'name': 'FILEKEY',
                            'value': key
                        },
                    ]},
            ],
        },
        platformVersion='LATEST',
            networkConfiguration={
                'awsvpcConfiguration': {
                    'subnets': [
                        '<subnet-id>',
                    ],
                    'assignPublicIp': 'ENABLED'
                }
            },
        taskDefinition='firenet'
    )

    response = client.run_task(
        launchType = 'FARGATE',
        cluster='<Cluster name>',
        count = 1,
        overrides={
            'containerOverrides': [
                {
                    'name': 'fallnet',
                    'environment': [
                        {
                            'name': 'FILEURL',
                            'value': filelink
                        },
                        {
                            'name': 'FILEKEY',
                            'value': key
                        },
                    ]},
            ],
        },
        platformVersion='LATEST',
            networkConfiguration={
                'awsvpcConfiguration': {
                    'subnets': [
                        '<subnet-id>',
                    ],
                    'assignPublicIp': 'ENABLED'
                }
            },
        taskDefinition='fallnet'
    )

    return {'message': params}
