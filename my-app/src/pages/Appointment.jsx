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
                 status:""
        }
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
    fetchAppointmentCreate()
    {
        var input = {
            title: this.state.title,
            guest_name: this.state.guest_name,
            meetingdate: this.state.meetingdate,
            meeting_user: this.state.meeting_user,
            status: "OnProgress",
            note: this.state.note
        }
        var url = "https://5cb2d49e6ce9ce00145bef17.mockapi.io/api/v1/appointment"
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
          });
    }
    render() {
        return (
            <div className = "container">
                <h1>Appointment Form</h1>
                <form>
                <div className = "form-group">
                        <label for ="title">Title</label>
                        <input 
                        type ="text" 
                        className ="form-control" 
                        placeholder ="Enter the appointment's title"
                        name = "title"
                        onChange = {this.handleChangeTitle.bind(this)}
                        />
                    </div>
                    <div className = "form-group">
                        <label for ="name">Guest Name</label>
                        <input 
                        type ="text" 
                        className ="form-control" 
                        placeholder ="Enter the guest name"
                        name = "guest_name"
                        onChange = {this.handleChangeGuestName.bind(this)}
                        />
                    </div>
                    <div className = "form-group">
                        <label for ="date">Meeting Date</label>
                        <input 
                        type ="date" 
                        className ="form-control" 
                        name = "meetingdate"
                        onChange = {this.handleChangeMeetingDate.bind(this)}/>
                    </div>
                    <div className = "form-group">
                        <label for ="meetingperson">Meeting Person</label>
                        <input 
                        type ="text" 
                        className ="form-control" 
                        placeholder ="Enter the person you want to make appointment"
                        name = "meetinguser"
                        onChange = {this.handleChangeMeetinUser.bind(this)}/>
                    </div>
                    <div className = "form-group">
                        <label for ="note">Note</label>
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
