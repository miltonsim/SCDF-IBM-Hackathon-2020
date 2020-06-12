
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

    onChangeHandler = event => {

        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })

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
                                        <h3 className=" mb-0">Upload a file</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <form method="post" action="#" id="#">
                                            <div className="form-group files">
                                                <label>Upload Your File </label>
                                                <input type="file" className="form-control" multiple="" onChange={this.onChangeHandler} />
                                            </div>
                                        </form>

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
