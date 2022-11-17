import React from 'react'

const Header = () => {
  return (
    <nav>
        <NavContent/>
    </nav>
  )
}

const NavContent = () => (
    <>
    <h2 className='font-extralight'>Aryan</h2>
    <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
    </div>
    <a href="mailto:aryanrusia8@gmail.com">
        <button>Email</button>
    </a>
    </>
)

export default Header