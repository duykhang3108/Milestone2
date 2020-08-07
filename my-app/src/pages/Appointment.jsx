import React, { Component } from 'react'

export default class Appointment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {    
                title:"",         
                 guest_name:"",
                 date:"",
                 meeting_user:"",
                 note:"",
                 status:"",
                 building:1,
                 floor:1,
                 room:1
        }
    }
    resetState()
    {
        this.setState({title:"",         
        guest_name:"",
        date:"",
        meeting_user:"",
        note:"",
        status:"",
        building:1,
        floor:1,
        room:1})
    }
    handleChangeTitle(event) {
        // let obj = []
        // obj[event.target.name] = event.target.value
        // console.log(this.state.appoinment.guest_name)
        // this.setState(obj)
        this.setState({
            title: event.target.value
        });
    }
    handleChangeGuestName(event) {
        // let obj = []
        // obj[event.target.name] = event.target.value
        // console.log(this.state.appoinment.guest_name)
        // this.setState(obj)
        this.setState({
            guest_name : event.target.value
        });
    }
    handleChangeMeetingDate(event) {    
        this.setState({
            meetingdate : event.target.value
        });
    }
    handleChangeMeetinUser(event) {    
        this.setState({
            meeting_user : event.target.value
        });
    }
    handleChangeNote(event) {    
        this.setState({
            note : event.target.value
        });
    }
    handleChange(event)
    {
        let obj = []
        obj[event.target.name] = event.target.value
        this.setState(obj)
    }
    fetchAppointmentCreate()
    {
        var position = this.state.building + "." + this.state.floor + "."+this.state.room
        var input = {
            title: this.state.title,
            guest_name: this.props.guest_name,
            meetingdate: this.state.meetingdate,
            meeting_user: this.state.meeting_user,
            status: "OnProgress",
            note: this.state.note,
            location: position
        }
        var url = "https://5cb2d49e6ce9ce00145bef17.mockapi.io/api/v1/appointments"
        const response = fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            //ode: 'cors', // no-cors, *cors, same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(input) // body data type must match "Content-Type" header
          }) 
          .then(response => {
              this.resetState();
              this.props.refreshProfile();
          })
    }

    render() {
        return (
            <div className = "container">
                <h1>Appointment Form</h1>
                <form>
                <div className = "form-group">
                        <label htmlFor="title">Title</label>
                        <input 
                        type ="text" 
                        className ="form-control" 
                        placeholder ="Enter the appointment's title"
                        name = "title"
                        onChange = {this.handleChangeTitle.bind(this)}
                        />
                    </div>                    

                    <div className = "form-group">
                        <label htmlFor="date">Meeting Date</label>
                        <input 
                        type ="date" 
                        className ="form-control" 
                        name = "meetingdate"
                        onChange = {this.handleChangeMeetingDate.bind(this)}/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor="meetingperson">Meeting Person</label>
                        <input 
                        type ="text" 
                        className ="form-control" 
                        placeholder ="Enter the person you want to make appointment"
                        name = "meetinguser"
                        onChange = {this.handleChangeMeetinUser.bind(this)}/>
                    </div>
                    <div className = "form-group">
                        <h2>Location</h2>
                        Building : 
                        <input 
                        type ="number" 
                        className ="form-control" 
                        name = "building"
                        onChange = {this.handleChange.bind(this)}/>
                        Floor : 
                        <input 
                        type ="number" 
                        className ="form-control" 
                        name = "floor"
                        onChange = {this.handleChange.bind(this)}/>
                        Room : 
                        <input 
                        type ="number" 
                        className ="form-control" 
                        name = "room"
                        onChange = {this.handleChange.bind(this)}/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor="note">Note</label>
                        <input 
                        type ="text" 
                        className ="form-control" 
                        placeholder ="Enter if there is any prior note"
                        name = "note"
                        onChange = {this.handleChangeNote.bind(this)}/>
                    </div>

                </form>
                <button className="btn btn-primary" onClick={this.fetchAppointmentCreate.bind(this)}>Make appointment</button>
            </div>
        )
    }
}
