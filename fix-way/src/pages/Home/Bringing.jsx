import React from 'react'
import phone from "../../assets/phone.jpg"
import "../../scss/bringing.scss"

function Bringing() {
    return (
        <div className="container">
            <div className="bringing">
                <h1>Bringing professional solutions to your daily problems</h1>
                <p className="slogan">We make repairs faster and easier.</p>
            </div>
            <div className="content">
                <div className="image">
                    <img src={phone} alt="Person using phone" className="img" />
                </div>
                <div className="text">
                    <h2>Who We Are and What Drives Us</h2>
                    <p>
                        At Fixway, we believe everyone deserves quick, reliable, and hassle-free
                        solutions for their home and tech issues. By connecting a network of skilled
                        professionals through our app, we bring the right experts to you anytime,
                        anywhere. Our mission is to simplify the repair process, save you time, and
                        bring comfort to your home.
                    </p>
                    <button className="outline">Usta ol</button>
                </div>
            </div>
        </div>
    )
}

export default Bringing