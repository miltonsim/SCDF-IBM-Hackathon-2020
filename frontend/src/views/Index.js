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
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { Tooltip } from 'reactstrap';
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

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const [viewport, setViewPort] = useState({
    latitude: 1.340863,
    longitude: 103.8303918,
    zoom: 11,
    width: "100vw",
    height: "100vh",
  });

  const [fireCameraId, setFireCameraId] = useState([]);
  const [fireCoordinates, setFireCoordinates] = useState([]);

  const fetchFireAPI = () => {

    setFireCameraId([])
    Axios.get(
      "https://4l4odfs0oi.execute-api.ap-southeast-1.amazonaws.com/default/scan_fire"
    )
      .then((res) => {
        console.log(res);
        if (res.data) {
          for (let i in res.data) {
            setFireState(true);
            setVideoName(res.data[i].filename.S);

            const prevId = fireCameraId;
            prevId.push(res.data[i].cameraid.N);
            setFireCameraId(prevId)
          }

          Axios.get("https://4v3nsgopzi.execute-api.ap-southeast-1.amazonaws.com/scan_camera")
          .then(res => {
            setFireCoordinates([])
            res.data.forEach((result, index) => {
              if (result.id.N === fireCameraId[0]) {

                fireCoordinates.push({
                      
                      latitude: parseFloat(result.location.S.split(',')[0]),
                      longitude: parseFloat(result.location.S.split(',')[1]),
                      address: result.address.S,
                      show: false
                    });
                setFireCoordinates((oldarr) => [
                   {
                    latitude: parseFloat(result.location.S.split(',')[0]),
                    longitude: parseFloat(result.location.S.split(',')[1]),
                    address: result.address.S,
                    show: false
                  }
                ])
              }
            })
          })
          .catch((error) => {
            console.log(error);
          });
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

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const markerList = fireCoordinates.map((cameraCoordinate, index) => {
    return (<Marker
      key={index}
      latitude={cameraCoordinate.latitude}
      longitude={cameraCoordinate.longitude}
    >
      <i class="fa fa-fire text-danger" style={{"font-size": 2 + "em"}} id={"test-" + index}></i>
      {
          index === 0 ?
            <Tooltip placement="right" isOpen={tooltipOpen} target={"test-" + index} toggle={toggle}>
              {cameraCoordinate.address}
            </Tooltip>
            :
            ""
        }
    </Marker >)
  })

  return (
    
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>

        {fireState ? <Notification /> : null}

        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h6 className="text-uppercase text-muted ls-1 mb-1">
                  Map
                    </h6>
              </CardHeader>
              <CardBody>
                <ReactMapGL
                  {...viewport}
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                  onViewportChange={(view) => {
                    setViewPort(view)
                  }}
                  mapStyle="mapbox://styles/qtxbryan/ckbcehlci0yt01is4202useay"
                  style={{ maxWidth: "100%" }}
                >
                  {markerList}

                </ReactMapGL>

              </CardBody>
            </Card>
          </Col>

        </Row>

        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      <img src={require("assets/img/icons/common/live-news.svg")} width="30px" height="30px" />
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
                      Number of Fire Cases
                    </h6>
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


      </Container>
    </>
  );
};

export default Index;
