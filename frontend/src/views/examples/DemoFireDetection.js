
import React from "react";

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

class DemoFireDetection extends React.Component {
    state = {
        selectedFile: null
    }
    readFileDataAsBase64(e) {
        const file = e.target.files[0];
    
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

        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })

        this.readFileDataAsBase64(event).then(result => {
            // here's the file
            console.log(result);
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)

        console.log(data);
    }

    render() {
        return (
            <>

                {/* <Header/> */}
                <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">

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

                                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>

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
