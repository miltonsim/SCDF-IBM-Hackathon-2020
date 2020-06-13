import React from "react";
import ReactPlayer from "react-player";
const Player = (props) => {
  console.log(props.videoUrl);
  const url = `https://scdf-ibm-blmnk-videos.s3.us-south.cloud-object-storage.appdomain.cloud/${props.videoUrl}`;

  return <ReactPlayer controls playing loop muted url={url} width="100%" />;
};

export default Player;
