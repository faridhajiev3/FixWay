import React from 'react'
import "../../scss/home.scss"

function Solutions() {
    return (
        <div className="container">
            <div className="hero">
                <div className="hero-left">
                    <div className="brand-text">
                        <span className="fix">Fix</span>
                        <span className="way">Way</span>
                    </div>
                </div>
                <div className="hero-right">
                    <h2 className="hero-title">Smart Fixes, Fast Solutions</h2>
                    <p className="hero-description">
                        Finding the right technician is as easy as taking a photo. Our AI analyzes the issue and connects you with top-rated experts — fast, simple, and stress-free.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">
                            Download
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </button>
                        <button className="btn btn-secondary">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions