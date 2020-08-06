import React from 'react'

const myGet = 'https://5cb04f6bf7850e0014629aa3.mockapi.io/account'
export default class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            account: [],
            id:'',
            userName: '',
            email: '',
            lastName: '',
            firstName: ''
        }
    }

    fectchAccount() {
        const { match: { params } } = this.props;
        console.log(params.userName)
        fetch(myGet)
            .then(res => res.json())
            .then(json => {
                let data = json.filter(a => a.userName === params.userName)
                this.setState({ account: data })
            })
    }

    handleUpdate() {
        const {match: {params}} = this.props;
        if (
            this.state.userName !== '' &&
            this.state.email !== '' &&
            this.state.firstName !== '' &&
            this.state.lastName !== ''
        ) {
            fetch(myGet + '/' + params.userName, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'put',
                body: JSON.stringify({
                    userName: this.state.userName,
                    email: this.state.email,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName
                })
            })
                .then(()=> this.props.fectchAccount())
                alert('The account has been successfully updated')
        } else {
            alert('Please enter correct information')
        }
    }

    handleChange(event) {
        let obj = []
        obj[event.target.name] = event.target.value
        this.setState(obj)
    }

    componentDidMount() {
        this.fectchAccount()
    }

    render() {
        return (
            <div>
                <div id="wrapper">
                    {this.state.account.map((a) =>
                        <div>
                            <div class="d-flex flex-column" id="content-wrapper">
                                <div id="content">
                                    <div class="container-fluid">
                                        <h3 class="text-dark mb-4">Profile</h3>
                                        <div class="row mb-3">
                                            <div class="col-lg-4">
                                                <div class="card mb-3">
                                                    <div class="card-body text-center shadow"><img class="rounded-circle mb-3 mt-4" src={a.avatar} width="160" height="160" />
                                                        <div class="mb-3"><button class="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="row">
                                                    <div class="col">
                                                        <div class="card shadow mb-3">
                                                            <div class="card-header py-3">
                                                                <p class="text-primary m-0 font-weight-bold">User Settings</p>
                                                            </div>
                                                            <div class="card-body">
                                                                <form>
                                                                    <div class="form-row">
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label for="username">
                                                                                    <strong>Username</strong>
                                                                                </label>
                                                                                <input
                                                                                    class="form-control"
                                                                                    type="text"
                                                                                    placeholder={a.userName}
                                                                                    value={this.state.userName}
                                                                                    onChange={this.handleChange.bind(this)}
                                                                                    name="userName"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label for="email">
                                                                                    <strong>Email Address</strong>
                                                                                </label>
                                                                                <input
                                                                                    class="form-control"
                                                                                    type="email"
                                                                                    placeholder={a.email}
                                                                                    value={this.state.email}
                                                                                    name="email"
                                                                                    onChange={this.handleChange.bind(this)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-row">
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label for="first_name">
                                                                                    <strong>First Name</strong>
                                                                                </label>
                                                                                <input
                                                                                    class="form-control"
                                                                                    type="text"
                                                                                    placeholder={a.firstName}
                                                                                    value={this.state.firstName}
                                                                                    name="firstName"
                                                                                    onChange={this.handleChange.bind(this)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="form-group">
                                                                                <label for="last_name">
                                                                                    <strong>Last Name</strong>
                                                                                </label>
                                                                                <input
                                                                                    class="form-control"
                                                                                    type="text"
                                                                                    placeholder={a.lastName}
                                                                                    value={this.state.lastName}
                                                                                    name="lastName"
                                                                                    onChange={this.handleChange.bind(this)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <button class="btn btn-primary btn-sm" type="submit" onClick={this.handleUpdate.bind(this)}>Save Settings</button>
                                                                    </div>
                                                                </form>

                                                            </div>
                                                        </div>
                                                        <div class="card shadow">
                                                            <div class="card-header py-3">
                                                                <p class="text-primary m-0 font-weight-bold">Contact Settings</p>
                                                            </div>
                                                            <div class="card-body">
                                                                <form>
                                                                    <div class="form-group"><label for="address"><strong>Address</strong></label><input class="form-control" type="text" placeholder="Sunset Blvd, 38" name="address" /></div>
                                                                    <div class="form-row">
                                                                        <div class="col">
                                                                            <div class="form-group"><label for="city"><strong>City</strong></label><input class="form-control" type="text" placeholder="Los Angeles" name="city" /></div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="form-group"><label for="country"><strong>Country</strong></label><input class="form-control" type="text" placeholder="USA" name="country" /></div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group"><button class="btn btn-primary btn-sm" type="submit">Save&nbsp;Settings</button></div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}