import React from 'react'
import "./styles/Navbar.css"

const Navbar = ({handleClickShowModal}) => {

  
  return (
    <nav className='navbar'>
        <h1 className='navbar__title'>Users CRUD</h1>
        <button className='navbar__button'>
            <i onClick={handleClickShowModal} className='bx bx-cross'>Create new user</i>
        </button>
    </nav>
  )
}

export default Navbar