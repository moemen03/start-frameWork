import React from 'react'
import { Link , NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg p-3 fixed-top z-3">
        <div className="container">
            <Link className="navbar-brand text-uppercase fw-bold fs-4" to="">START FRAMEWORK</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <i class="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item fw-bolder mx-1 " >
                <NavLink  to="/about" activeClassName="active" className="nav-link text-white">ABOUT</NavLink>
                </li>
                <li className="nav-item fw-bolder mx-1 ">
                <NavLink  to="/protofolio" activeClassName="active"   className="nav-link text-white">PROTOFOLIO</NavLink>
                </li>
                <li className="nav-item fw-bolder mx-1 " >
                <NavLink  to="/contact" activeClassName="active" className="nav-link text-white">CONTACT</NavLink>
                </li>
                
                </ul>
          </div>
        </div>
    </nav>
  )
}
