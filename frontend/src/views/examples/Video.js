import React from "react";
import axios from "axios";

const Video = (props) => {
  axios
    .get(
      "https://4l4odfs0oi.execute-api.ap-southeast-1.amazonaws.com/default/scan_fire"
    )
    .then((res) => {
      console.log(res);
    });

  return <div>Hi</div>;
};

export default Video;
