import boto3

def lambda_handler():
    client = boto3.client(
    'dynamodb',
    region_name="ap-southeast-1"
    )

    response = client.scan(TableName="fall")
    return response['Items']