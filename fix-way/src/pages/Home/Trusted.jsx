import React from 'react'
import "../../scss/trusted.scss"
import person1 from "../../assets/person1.jpg"
import person2 from "../../assets/person2.jpg"
import person3 from "../../assets/person3.jpg"
import person4 from "../../assets/person4.jpg"
import person5 from "../../assets/person5.jpg"

function Trusted() {
    const images = [
        person1, person2, person3, person4, person5,
        person1, person2, person3, person4, person5,
        person1, person2, person3,
    ];
    return (
        <div className="container">
            <div className="trusted-images">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Person ${index + 1}`}
                        className="trusted-image"
                    />
                ))}
            </div>
            <div className="trusted-content">
                <h2 className="trusted-title">Trusted Solutions, Built for You</h2>
                <p className="trusted-text">
                    İnsanlar doğru həlləri tapmaq üçün platformamıza güvənirlər. Biz isə bu prosesi sənin üçün sadə, effektiv və stresssiz etmək üçün buradayıq.
                </p>
                <button className="trusted-button">Download app</button>
            </div>
        </div>
    )
}

export default Trusted