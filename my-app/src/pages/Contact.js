import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
const Contact = (props) => {
  return (
    <div className="container">      
      <div className="contact">
      <Link to ="/contactform">Leave us your message !</Link>
      <h1>Contact Information</h1>
        <div className="row p-2 pl-5">
          <div className="col-md-3">
            <i className="fa fa-map-marker-alt fa-2x"></i>
          </div>
          <div className="col-md-9">
            <p>Address</p>
            <p>Ho Chi Minh City</p>
          </div>
        </div>
        <div className="row p-2 pl-5">
          <div className="col-md-3">
            <i className="fa fa-envelope fa-2x"></i>
          </div>
          <div className="col-md-9">
            <p>Email</p>
            <p>admin@gmail.com</p>
          </div>
        </div>
        <div className="row p-2 pl-5">
          <div className="col-md-3">
            <i className="fa fa-phone fa-2x"></i>
          </div>
          <div className="col-md-9">
            <p>Phone</p>
            <p>0123456789</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Contact;
