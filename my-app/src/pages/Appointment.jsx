import React, { Component } from 'react'

export default class Appointment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             appoinment:{
                 guest_name:"",
                 date:"",
                 meeting_user:"",
                 note:"",
                 status:""
             }
        }
    }
    handleChange(event) {
        let obj = []
        obj[event.target.name] = event.target.value
        this.setState(obj)
    }
    fetchAppointmentCreate()
    {
        var input = {
            meetingdate: Date.now(),
            users: [],
            status: "OnProgress",
            note: "Please have a wheel chair for me"
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
            <div>
                <form>
                    <div className = "form-group">
                        <label for ="name">Guest Name</label>
                        <input 
                        type ="text" 
                        className ="form-control" 
                        placeholder ="Enter the guest name"/>
                    </div>
                    <div className = "form-group">
                        <label for ="date">Meeting Date</label>
                        <input 
                        type ="date" 
                        className ="form-control" 
                        placeholder ="Meeting Date"/>
                    </div>
                    <div className = "form-group">
                        <label for ="meetingperson">Meeting Person</label>
                        <input 
                        type ="text" 
                        className ="form-control" 
                        placeholder ="Enter the person you want to make appointment"/>
                    </div>
                    <div className = "form-group">
                        <label for ="note">Note</label>
                        <input 
                        type ="text" 
                        className ="form-control" 
                        placeholder ="Enter if there is any prior note"/>
                    </div>

                </form>
                <button onClick={this.fetchAppointmentCreate.bind(this)}>FetchTesting</button>
            </div>
        )
    }
}
