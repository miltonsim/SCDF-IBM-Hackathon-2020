import React from "react";

import { UncontrolledAlert } from "reactstrap";

const Notification = (props) => {
  return (
    <UncontrolledAlert color="warning" fade={false}>
      <span className="alert-inner--icon">
        <i class="fas fa-file-medical-alt"></i>
      </span>{" "}
      <span className="alert-inner--text">
        <strong>{props.title}</strong>
      </span>
    </UncontrolledAlert>
  );
};

export default Notification;
