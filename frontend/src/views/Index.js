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
import React, { useState, useEffect, useReducer } from "react";
// node.js library that concatenates classes (strings)
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { Tooltip } from "reactstrap";
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

const fireReducer = (currentFireState, action) => {
  switch (action.type) {
    case "POLL":
      return { ...currentFireState, fire: false, videoName: "", noti: false };
    case "SET":
      return {
        ...currentFireState,
        fire: true,
        videoName: action.response,
        noti: true,
      };
    case "REMOVE":
      return {
        ...currentFireState,
        fire: false,
        videoName: action.response,
        noti: false,
      };
    case "CLEAR":
      return { ...currentFireState, fire: false, videoName: "", noti: false };
    default:
      throw new Error("Should Never Reach Here!!");
  }
};

const fallReducer = (currentFallState, action) => {
  switch (action.type) {
    case "POLL":
      return { ...currentFallState, fall: false, videoName: "", noti: false };
    case "SET":
      return {
        ...currentFallState,
        fall: true,
        videoName: action.response,
        noti: true,
      };
    case "REMOVE":
      return {
        ...currentFallState,
        fall: false,
        videoName: action.response,
        noti: false,
      };
    case "CLEAR":
      return { ...currentFallState, fire: false, videoName: "", noti: false };
    default:
      throw new Error("Should not have reached here!!");
  }
};

const Index = () => {
  // DUMMY DATA FOR FIRE NOTIFICATION
  const [fire, dispatchFire] = useReducer(fireReducer, {
    fire: false,
    videoName: "",
    title: "New Fire has been detected",
    noti: false,
  });

  const [fall, dispatchFall] = useReducer(fallReducer, {
    fall: false,
    videoName: "",
    title: "New Fall has been detected",
    noti: false,
  });

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

  const fireURL =
    "https://4l4odfs0oi.execute-api.ap-southeast-1.amazonaws.com/default/scan_fire";

  const fallURL =
    "https://emdkmvfqcj.execute-api.ap-southeast-1.amazonaws.com/default/scan_fall";

  const pollFallData = () => {
    Axios.get(fallURL)
      .then((res) => {
        if (res.data.length) {
          for (let item in res.data) {
            dispatchFall({ type: "SET", response: res.data[item].filename.S });
          }
        } else {
          dispatchFall({ type: "CLEAR" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pollFireData = () => {
    setFireCameraId([]);

    Axios.get(fireURL)
      .then((res) => {
        if (res.data.length) {
          for (let i in res.data) {
            dispatchFire({ type: "SET", response: res.data[i].filename.S });

            const prevId = fireCameraId;
            prevId.push(res.data[i].cameraid.N);
            setFireCameraId(prevId);
          }

          Axios.get(
            "https://4v3nsgopzi.execute-api.ap-southeast-1.amazonaws.com/scan_camera"
          )
            .then((res) => {
              setFireCoordinates([]);
              res.data.forEach((result, index) => {
                if (result.id.N === fireCameraId[0]) {
                  fireCoordinates.push({
                    latitude: parseFloat(result.location.S.split(",")[0]),
                    longitude: parseFloat(result.location.S.split(",")[1]),
                    address: result.address.S,
                    show: false,
                  });
                  setFireCoordinates((oldarr) => [
                    {
                      latitude: parseFloat(result.location.S.split(",")[0]),
                      longitude: parseFloat(result.location.S.split(",")[1]),
                      address: result.address.S,
                      show: false,
                    },
                  ]);
                }
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          dispatchFire({ type: "CLEAR" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let alert = null;
  let videoPlayer = <Player />;

  if (fall.videoName) {
    alert = <Notification title={fall.title} />;
    videoPlayer = <Player videoUrl={fall.videoName} />;
  } else if (fire.videoName) {
    alert = <Notification title={fire.title} />;
    videoPlayer = <Player videoUrl={fire.videoName} />;
  }

  useEffect(() => {
    pollFallData();
    pollFireData();
    console.log("After first fire", fire.videoName);
    console.log("After first fall", fall.videoName);
    const interval = setInterval(() => {
      pollFallData();
      pollFireData();
      console.log("Recalled API Again");
      console.log("Fall data", fall.videoName);
      console.log("fire data", fire.videoName);
    }, 10000);

    return () => clearInterval(interval);
  }, [fire.videoName, fall.videoName]);

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
  });

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {alert}

        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h6 className="text-uppercase text-muted ls-1 mb-1">Map</h6>
              </CardHeader>
              <CardBody>
                <ReactMapGL
                  {...viewport}
                  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                  onViewportChange={(view) => {
                    setViewPort(view);
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
                      <img
                        src={require("assets/img/icons/common/live-news.svg")}
                        width="30px"
                        height="30px"
                      />
                    </h6>
                    <h2 className="text-white mb-0">Live Feed</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>{videoPlayer}</CardBody>
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
