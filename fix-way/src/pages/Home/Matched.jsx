import React from 'react'
import "../../scss/matched.scss"

function Matched() {
    return (
        <div className='container'>
            <div className='matched-section'>
                <div className='matched-step'>
                    <h4>
                        Tell us what you need
                    </h4>
                    <p>Choose the service - plumbing, electrical, or anything else - and give a few details.</p>
                </div>
                <div className='matched-step'>
                    <h4>
                        Get matched instantly
                    </h4>
                    <p>We connect you with available, verified professionals near your location.</p>
                </div>
                <div className='matched-step'>
                    <h4>
                       Book and relax
                    </h4>
                    <p>Pick a time, confirm your request, and let the expert handle the rest.</p>
                </div>
            </div>
        </div>
    )
}

export default Matched