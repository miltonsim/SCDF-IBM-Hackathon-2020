/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import { chartOptions, parseOptions, chartExample2 } from "variables/charts.js";

import Player from "components/Player/Player";
import Header from "components/Headers/Header.js";
import Notification from "components/Notification/Notification";
import Axios from "axios";

const Index = () => {
  // DUMMY DATA FOR FIRE NOTIFICATION

  const [fireState, setFireState] = useState(false);
  const [videoName, setVideoName] = useState("");
  const [error, setError] = useState("");

  const fetchFireAPI = () => {
    Axios.get(
      "https://4l4odfs0oi.execute-api.ap-southeast-1.amazonaws.com/default/scan_fire"
    )
      .then((res) => {
        console.log(res);
        if (res.data) {
          for (let i in res.data) {
            setFireState(true);
            setVideoName(res.data[i].filename.S);
          }
        } else {
          setFireState(false);
          setVideoName("");
        }

        console.log(videoName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchFireAPI();
    const interval = setInterval(() => {
      fetchFireAPI();
      console.log("Recalled API Again");
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {fireState ? <Notification /> : null}
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                    <img src={require("assets/img/icons/common/live-news.svg")} width="30px" height="30px"/>
                    </h6>
                    <h2 className="text-white mb-0">Live Feed</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <Player videoUrl={videoName} />
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total orders</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Referral</th>
                    <th scope="col">Visitors</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>1,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-gradient-danger"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>5,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <Progress
                            max="100"
                            value="70"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Google</th>
                    <td>4,807</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80%</span>
                        <div>
                          <Progress max="100" value="80" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Instagram</th>
                    <td>3,678</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">75%</span>
                        <div>
                          <Progress
                            max="100"
                            value="75"
                            barClassName="bg-gradient-info"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">twitter</th>
                    <td>2,645</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">30%</span>
                        <div>
                          <Progress
                            max="100"
                            value="30"
                            barClassName="bg-gradient-warning"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
