import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Contact = (props) => {
  return (
    <div className="contact">
      <div className="row p-2 pl-5">
        <div className="col-md-3">
          <i className="fa fa-map-marker-alt fa-2x"></i>
        </div>
        <div className="col-md-9">
          <body>Address</body>
          <p>Ho Chi Minh City</p>
        </div>
      </div>
      <div className="row p-2 pl-5">
        <div className="col-md-3">
          <i className="fa fa-envelope fa-2x"></i>
        </div>
        <div className="col-md-9">
          <body>Email</body>
          <p>admin@gmail.com</p>
        </div>
      </div>
      <div className="row p-2 pl-5">
        <div className="col-md-3">
          <i className="fa fa-phone fa-2x"></i>
        </div>
        <div className="col-md-9">
          <body>Phone</body>
          <p>0123456789</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
