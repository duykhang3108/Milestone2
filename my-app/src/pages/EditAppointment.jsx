import React from 'react'

const myPut = "https://5cb2d49e6ce9ce00145bef17.mockapi.io/api/v1/appointments"
export default class EditAppointment extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            oneApp: [],
            type: 'text',
            title: "",
            guest_name: "",
            date: "",
            meeting_user: "",
            note: "",
            status: "",
            location: "",
            building: 1,
            floor: 1,
            room: 1
        }
    }

    fetchAppointment() {
        // const { match: { params } } = this.props
        fetch(myPut + "/" + 5)
            .then(response => response.json())
            .then(json => {
                this.setState({ oneApp: json })
            })
            .then(() => this.displayInfo())
    }
    
    // Acessing data from API recall
    displayInfo() {
        // Spliting the location into different fields
        var locationSplit = []
        locationSplit = this.state.oneApp.location.split(".")
        
        this.setState({
            title: this.state.oneApp.title,
            date: this.state.oneApp.meetingdate,
            meeting_user: this.state.oneApp.meeting_user,
            note: this.state.oneApp.note,
            building: locationSplit[0],
            floor: locationSplit[1],
            room: locationSplit[2]
        })
        console.log('Displayed')
    }

    handleChange(event) {
        let obj = []
        obj[event.target.name] = event.target.value
        this.setState(obj)
    }

    onFocus() {
        this.setState({
            type: 'date'
        })
    }

    onBlur() {
        this.setState({
            type: 'text'
        })
    }

    handleUpdate() {
        // Re-combining fields into one location field 
        // for easy update
        var location = this.state.building + "." + this.state.floor + "." + this.state.room
        fetch(myPut + '/' + this.state.oneApp.id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify({
                title: this.state.title,
                meetingdate: this.state.date,
                meeting_user: this.state.meeting_user,
                note: this.state.note,
                location: location
            })
        })
            .then(() => this.fetchAppointment())
        alert('The appointment has been successfully updated')
    }

    componentDidMount() {
        this.fetchAppointment()
        console.log('Fetched')
    }

    render() {
        return (
            <div className="container">
                <h1>Edit Your Appointment</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={this.state.title}
                            name="title"
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    {/* The date is not showing */}
                    <div className="form-group">
                        <label htmlFor="date">Meeting Date</label>
                        <input
                            type={this.state.type}
                            className="form-control"
                            name="meetingdate"
                            placeholder={this.state.date}
                            onFocus={()=> this.onFocus()}
                            onBlur={() => this.onBlur()}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="meetingperson">Meeting Person</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={this.state.meeting_user}
                            name="meetinguser"
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <h2>Location</h2>
                        Building :
                        <input
                            type="number"
                            className="form-control"
                            name="building"
                            placeholder={this.state.building}
                            onChange={this.handleChange.bind(this)}
                        />
                        Floor :
                        <input
                            type="number"
                            className="form-control"
                            name="floor"
                            placeholder={this.state.floor}
                            onChange={this.handleChange.bind(this)}
                        />
                        Room :
                        <input
                            type="number"
                            className="form-control"
                            name="room"
                            placeholder={this.state.room}
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="note">Note</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={this.state.note}
                            name="note"
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                </form>
                <button className="btn btn-primary" onClick={this.handleUpdate.bind(this)}>Save Changes</button>
            </div>
        )
    }
}