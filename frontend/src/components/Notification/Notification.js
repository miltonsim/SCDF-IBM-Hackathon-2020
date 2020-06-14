import React from "react";

import { UncontrolledAlert } from "reactstrap";

const Notification = (props) => {
  return (
    <UncontrolledAlert className="alert-default" fade={false}>
      <span className="alert-inner--icon">
        <i className="ni ni-like-2" />
      </span>{" "}
      <span className="alert-inner--text">
        <strong>New Fire</strong> Click here for more!!
      </span>
    </UncontrolledAlert>
  );
};

export default Notification;
