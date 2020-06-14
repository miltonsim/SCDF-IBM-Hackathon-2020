
import React from "react";
import ibm from "ibm-cos-sdk";
import  { Link } from 'react-router-dom';
import {
    Container,
    Button,
    Card,
    CardHeader,
    CardBody,
    Row,
    Col
} from "reactstrap";

import '../../assets/css/custom.css';

var config = {
    accessKeyId: process.env.REACT_APP_IBM_ACCESSKEY,
    secretAccessKey: process.env.REACT_APP_IBM_SAKEY,
    endpoint: process.env.REACT_APP_IBM_ENDPOINT,
    serviceInstanceId: process.env.REACT_APP_IBM_SIID
}



var cos = new ibm.S3(config);

function doCreateObject(filename, data) {
    console.log('Creating object');
    return cos.putObject({
        Bucket: process.env.REACT_APP_IBM_BUCKET,
        Key: filename,
        Body: data 
    }).promise();
}

class DemoFireDetection extends React.Component {
    state = {
        selectedFile: null
    }
    readFileDataAsBase64(file) {    
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = (event) => {
                resolve(event.target.result);
            };
    
            reader.onerror = (err) => {
                reject(err);
            };
    
            reader.readAsDataURL(file);
        });
    }

    onChangeHandler = event => {
        
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })

        // this.readFileDataAsBase64(event).then(result => {
        //     // here's the file
        //     console.log(result.split(";"));
        // })
    }

    onClickHandler = () => {
        const file = this.state.selectedFile;
        const filename = file.name;
        const fileData = this.readFileDataAsBase64(file);
        fileData.then(result => {
            var data = result.split(";")[1].split(",")[1];
            doCreateObject(filename, new Buffer(data, 'base64')).then(function() {
                console.log('Uploaded!');
                
            })
            .catch(function(err) {
                console.error('An error occurred:');
                console.error(err);
            });
        });

        
    }

    render() {
        return (
            <>

                {/* <Header/> */}
                <div className="header newBgColor pb-8 pt-5 pt-md-8">

                    <Container fluid>
                        {/* Table */}
                        <Row>
                            <div className=" col">
                                <Card className=" shadow">
                                    <CardHeader className=" bg-transparent">
                                        <h3 className=" mb-0"><i class="ni ni-camera-compact"></i>  Upload a file</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <form method="post" action="#" id="#">
                                            <div className="form-group files">
                                                <label>Upload Your File </label>
                                                <input type="file" className="form-control" multiple="" onChange={this.onChangeHandler} />
                                            </div>
                                        </form>

                                        <Link to="/admin/index"><button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button></Link>
                                    </CardBody>
                                </Card>
                            </div>
                        </Row>
                    </Container>

                </div>
            </>
        );
    }
}

export default DemoFireDetection;
