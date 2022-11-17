import React from 'react'
import vg from "../assets/2.png"

const About = () => {
    return (
        <div className="home2" id='about' >

            <img src={vg} alt="Graphics" />
            <div>
                <h1 >About me 😃</h1>
                <p>
                    I am an undergrad student at University if Alberta in 3rd year, pursuing Computer Engineering Co-op. I am interested in learning database management and machine learning. I will be joining Teck Resources as a Process Assistant where I will get practical experience of what I love. My expected graduation date is April 2025.

                </p>
                <p>You can download my resume from the home page. Please let me know if you need more info from me.</p>
            </div>
        </div>
    )
}

export default About