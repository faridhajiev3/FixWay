import React from 'react'
import "../../scss/home.scss"
import Bringing from './Bringing'

function HomePage() {
    return (
        <main class="main">
            <div class="container">
                <div class="hero">
                    <div class="hero-left">
                        <div class="brand-text">
                            <span class="fix">Fix</span>
                            <span class="way">Way</span>
                        </div>
                    </div>
                    <div class="hero-right">
                        <h2 class="hero-title">Smart Fixes, Fast Solutions</h2>
                        <p class="hero-description">
                            Finding the right technician is as easy as taking a photo. Our AI analyzes the issue and connects you with top-rated experts — fast, simple, and stress-free.
                        </p>
                        <div class="hero-buttons">
                            <button class="btn btn-primary">
                                Download
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </button>
                            <button class="btn btn-secondary">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
            <Bringing/>
        </main>
    )
}

export default HomePage