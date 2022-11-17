import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='contact'>
        <p className="text-4xl font-bold pt-32 p-2 text-center text-white">
          Contact Me!!
        </p>
        <p className="py-6 mt-2 text-white text-center pb-16">Please fill out the form below to get in touch !!</p>
      </div>
      <div className='outer'>

        <div className="box">
          <form action='https://getform.io/f/6ff13a48-b2f2-4584-aff9-f384c2ca0cca' method='POST' className="form">

            <h2>Contact Me 😃</h2>
            <div className="inputBox">
              <input type="text" name="Name" required='required' />
              <span>Your Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" name="email" required='required' />
              <span>Your email id</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" name="message" required='required'/>
              <span>Your message</span>
              <i></i>
            </div>
            <input type="submit" value='Submit' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact