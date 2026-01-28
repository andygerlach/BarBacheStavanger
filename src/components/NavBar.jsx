import { useState } from "react"
import { NavLink } from "react-router-dom"
import "../modules/NavBar.modules.css"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="nav-bar">
      <div className="nav-logo-container">
      <img src="/images/BB-Logo.jpg" alt="Bar Bache Logo" className="nav-logo" />
      <h1>Bar Bache</h1>
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
