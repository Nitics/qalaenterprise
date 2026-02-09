import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Images/qalaColor.png'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <nav>
      <img
        src={logo }
        alt="Qala Enterprise" className='navLogo'
      />

      <ul className={menu ? "show" : ""}>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
      </ul>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenu(!menu)}>
        ☰
      </div>
    </nav>
  )
}

export default Navbar
