import React from 'react'
import "../App.css";
import OneAd from './OneAp';
import { BrowserRouter, Route, Link } from "react-router-dom";



export default class ApList extends React.Component {

    componentDidMount() {
        console.log("in ad list")
    }

    render() {
        return (
            <div >
                 <main class="bg-dark page landing-page" style={{ paddingTop: '50px' }}>
                    <section class="bg-dark clean-block clean-info dark">
                        <div class="container bg-dark">
                            <div class="block-heading">
                                <h2 class="text-monospace text-info">List of Appointments</h2>
                              
                            </div>
                            <div class="row align-items-center mt-5">
                            {this.props.aps.map((a)=>
                    <Link to={`/advertisement/${a.id}`} style={{ color: "inherit", textDecoration: "none" }} class="col-lg-4 pb-4">
                        <OneAd name={a.name} location={a.location} time={a.time} avatar={a.avatar}/>
                    </Link>
                    )}
                            </div>
                        </div>
                    </section>
                    </main>
            </div>
        )
    }
}