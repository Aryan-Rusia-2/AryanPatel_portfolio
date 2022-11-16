import React from 'react'
import "../styles/experience.scss"

const Experience = () => {
    return (
        <div className='pb-24'>
            <div id='experience' >
                <p className="text-4xl font-bold pt-32 p-2 text-center text-white">
                    Work Experience
                </p>
                <p className="py-6 mt-2 text-white text-center">Here I have mentioned my work experience</p>
            </div>
            <div className="container">
                <div className="drop">
                    <div className="content">
                        <h2>Packer</h2>
                        <h3 className='font-semibold'>Amazon Warehouse, Edmonton, AB</h3>
                        <p>Undertook assigned warehouse duties including packing, scanning, shipping</p>
                    </div>
                </div>
                <div className="drop" ><div className="content">
                    <h2>Dispatcher</h2>
                    <h3 className='font-semibold'>Crown Cab, North Battleford, SK</h3>
                    <p>Managed a company for six months, from dispatcher and driver schedule to system and car maintenance</p></div></div>
                <div className="drop"><div className="content">
                    <h2>Developer</h2>
                    <h3 className='font-semibold'>Software developer</h3>
                    <p>Lorem ipsuetur adipisicing elit. Itaque provident corrupti, doloremque distinctio nesciunt aperiam. Ipsa architecto molestias corrupti tempora.</p></div></div>
            </div>
        </div>
    )
}

export default Experience;