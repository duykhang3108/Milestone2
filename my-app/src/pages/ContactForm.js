import React, { Component, Fragment, useState } from "react";

const ContactForm = () => {
  return (
    <Fragment>
      <form className="contact-form">
        <div class="form-group">
          <label for="name">
            Name: <span className="text-danger pl-3">NAME IS REQUIRED</span>
          </label>
          <input
            required
            type="text"
            class="form-control"
            placeholder="Enter Your Name    "
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">
            Email address:
            <span className="text-danger pl-3"> EMAIL IS REQUIRED</span>
          </label>
          <input
            required
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            Message{" "}
            <span className="text-danger pl-3"> MESSAGE IS REQUIRED</span>
          </label>
          <textarea
            required
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" class="contact-btn btn ">
          SEND MESSAGE
        </button>
      </form>
    </Fragment>
  );
};

export default ContactForm;
