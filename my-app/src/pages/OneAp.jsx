import React from 'react'
import { MDBBtnGroup, MDBBtn, MDBModalFooter } from 'mdbreact'

export default class OneAp extends React.Component {
    render() {
        return (
            //<div >
                <div class="card clean-card text-left"><img class="img-thumbnail card-img-top w-100 d-block"
                    src={this.props.avatar} style={{ width: '328px', height: '220px'}} />
                    <div class="card-body">
                       
                        <h5>{this.props.name}</h5>
                        <p>Location: {this.props.location}</p>
                        <p>Time: {this.props.time} </p>

                        <div>
                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn type="button" color="deep-orange"> Edit </MDBBtn>
                            <MDBBtn type="button" color="green"> Delete</MDBBtn>
                        </MDBModalFooter>
                        </div>
                    </div>
                </div>
            //</div>
        )
    }
}