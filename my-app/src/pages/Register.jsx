import React from 'react'
import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBInput,
} from 'mdbreact';

const myPost = 'https://5cb04f6bf7850e0014629aa3.mockapi.io/account'
export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleChange(event) {
        let obj = []
        obj[event.target.name] = event.target.value
        this.setState(obj)
    }

    handleAdd() {
        if (this.state.name == '' |
            this.state.email == '' |
            this.state.password == '' |
            this.state.firstName == '' |
            this.state.lastName == ''
        ) {
            alert('Something is missing')
        } else {
            let account = {
                userName: this.state.userName,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
            console.log(account)
            fetch(myPost, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'post',
                body: JSON.stringify(account)
            })
                .then(json => alert('Added'))
        }
    }

    render() {
        return (
            <div>
                <div class='container rounded' style={{ height: '650px', width: '800px', border: '2px solid grey' }}>
                    <MDBModalHeader
                        className='text-center'
                        titleClass='w-100 font-weight-bold'
                    >
                        Sign up
                    </MDBModalHeader>
                    <MDBModalBody>
                        <form className='mx-3 grey-text'>
                        <MDBInput
                                label='Username'
                                icon='envelope'
                                group
                                name='userName'
                                type='text'
                                value={this.state.userName}
                                validate
                                error='wrong'
                                success='right'
                                onChange={this.handleChange.bind(this)}
                            />
                            <MDBInput
                                label='First name'
                                icon='envelope'
                                group
                                name='firstName'
                                type='text'
                                value={this.state.firstName}
                                validate
                                error='wrong'
                                success='right'
                                onChange={this.handleChange.bind(this)}
                            />
                            <MDBInput
                                label='Last name'
                                icon='envelope'
                                group
                                name='lastName'
                                type='text'
                                value={this.state.lastName}
                                validate
                                error='wrong'
                                success='right'
                                onChange={this.handleChange.bind(this)}
                            />
                            <MDBInput
                                label='Your email'
                                icon='envelope'
                                group
                                name='email'
                                type='email'
                                value={this.state.email}
                                validate
                                error='wrong'
                                success='right'
                                onChange={this.handleChange.bind(this)}
                            />
                            <MDBInput
                                label='Your password'
                                icon='lock'
                                group
                                name='password'
                                type='password'
                                value={this.state.password}
                                validate
                                onChange={this.handleChange.bind(this)}
                            />
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter className='justify-content-center'>
                        <MDBBtn type='button' color='deep-orange' onClick={this.handleAdd.bind(this)}>
                            SIGN UP
                        </MDBBtn>
                    </MDBModalFooter>
                </div>
            </div>
        )
    }

} 