import React from 'react'
import { FaWrench, FaLaptop, FaCouch, FaTools } from "react-icons/fa";
import "../../scss/services.scss"

function Services() {
    return (
        <div className="container">
            <div className="services">
                <h2>Top Technician Services in Demand</h2>
                <p>Popular Categories</p>
            </div>
            <div className="services-section">
                <div className="services-step">
                    <div className="icons"><FaWrench /></div>
                    <h3>Electrician</h3>
                    <p>Socket and switch repair/installation...</p>
                </div>
                <div className="services-step">
                    <div className="icons"><FaLaptop /></div>
                    <h3>IT & Computer Tech...</h3>
                    <p>Computer, laptop, and printer repair...</p>
                </div>
                <div className="services-step">
                    <div className="icons"><FaCouch /></div>
                    <h3>Furniture Assembly...</h3>
                    <p>New furniture assembly (IKEA, Brav...)</p>
                </div>
                <div className="services-step">
                    <div className="icons"><FaTools /></div>
                    <h3>Boiler & Heating Syst...</h3>
                    <p>Boiler repair and technical maintena...</p>
                </div>
            </div>
        </div>
    )
}

export default Services