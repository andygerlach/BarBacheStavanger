import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/BB-Logo.jpg"
import "../modules/NavBar.modules.css"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="nav-bar">
      <div className="nav-logo-container">
      <NavLink to="/"><img src={logo} alt="Bar Bache Logo" className="nav-logo" /></NavLink>
      <NavLink to="/"><h1>Bar Bache</h1></NavLink>
      </div>

      <div>
        {/* Hamburger */}
        <nav
          className={`ham-menu ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </nav>

        {/* Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/openhours" onClick={closeMenu}>
                Open Hours
              </NavLink>
            </li>
            <li>
              <NavLink to="/tastings" onClick={closeMenu}>
                Tastings
              </NavLink>
            </li>
            <li>
              <NavLink to="/weeklyevents" onClick={closeMenu}>
                Weekly Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookings" onClick={closeMenu}>
                Book a Table
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
