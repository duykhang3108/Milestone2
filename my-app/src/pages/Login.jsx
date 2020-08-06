import React from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import history from "../history";
const myPost = "https://5cb04f6bf7850e0014629aa3.mockapi.io/account";
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

    this.state = {
      email: "",
      password: "",
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      history.push("/");
    } else {
      alert("Some thing is missing");
    }
  }
  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div className="mt-5">
        <div
          class="container rounded p-3"
          style={{ height: "", width: "800px", border: "2px solid grey" }}
        >
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
          >
            Login
          </MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                name="email"
                type="email"
                value={this.state.email}
                validate
                error="wrong"
                success="right"
                onChange={this.handleChange.bind(this)}
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                name="password"
                type="password"
                value={this.state.password}
                validate
                onChange={this.handleChange.bind(this)}
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn
              type="button"
              color="deep-orange"
              onClick={this.handleSubmit.bind(this)}
            >
              Login
            </MDBBtn>

            <Link to="/Register">
              <MDBBtn
                type="button"
                color="green"
                //   onClick={this.handleAdd.bind(this)}
              >
                Register
              </MDBBtn>
            </Link>
          </MDBModalFooter>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

// const connectedLoginPage = connect(mapState)(LoginPage);
// export { connectedLoginPage as LoginPage };
