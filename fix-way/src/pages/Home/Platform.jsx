import React from 'react'
import "../../scss/platform.scss"

function Platform() {
    return (
        <div className='container'>
            <div className='platform'>
                <div className='questions'>
                    <h2>Can you ask AI this too? Maybe not… But we’re here!</h2>
                    <p>You might have a few questions before using the platform — and guess what? We’ve probably heard them all. The answers are right here. For everything else, we’re just a message away.</p>
                    <button>Contact us</button>
                </div>
                <div className='faq-section'>
                    <div className='faq-item'>
                        <h4>How do I use the platform? <span>+</span></h4>
                    </div>
                    <div className='faq-item'>
                        <h4>How can I track the technician? <span>+</span></h4>
                    </div>
                    <div className='faq-item'>
                        <h4>How is the best technician selected? <span>+</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platform