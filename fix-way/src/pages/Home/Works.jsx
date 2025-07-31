import React from 'react'
import "../../scss/works.scss"
import { FaCrosshairs, FaSearch, FaClock } from "react-icons/fa";

function Works() {
    return (
        <div className="container">
            <div className="works">
                <h2>How it Works?</h2>
                <p>Easy help, from start to finish.</p>
            </div>
            <div className="works-section">
                <div className="works-step">
                    <div className="icon"><FaCrosshairs /></div>
                    <h3>Tell us what you need</h3>
                    <p>Choose the service - plumbing, electrical, or anything else - and give a few details.</p>
                </div>
                <div className="works-step">
                    <div className="icon"><FaSearch /></div>
                    <h3>Get matched instantly</h3>
                    <p>We connect you with available, verified professionals near your location.</p>
                </div>
                <div className="works-step">
                    <div className="icon"><FaClock /></div>
                    <h3>Book and relax</h3>
                    <p>Pick a time, confirm your request, and let the expert handle the rest.</p>
                </div>
            </div>
        </div>
    )
}

export default Works