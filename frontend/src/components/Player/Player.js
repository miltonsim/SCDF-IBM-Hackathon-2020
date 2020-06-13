import React from "react";
import ReactPlayer from "react-player";
const Player = () => {
  const url =
    "https://scdf-ibm-blmnk-videos.s3.us-south.cloud-object-storage.appdomain.cloud/test2.mp4";

  return <ReactPlayer controls playing loop muted url={url} width="100%" />;
};

export default Player;
