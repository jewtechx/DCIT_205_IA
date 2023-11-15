import React,{useRef} from 'react'
import {NavLink} from 'react-router-dom'
import navigation from "../../utils/navigation"
import './navbar.css'

import { Divide as Hamburger } from 'hamburger-react'

const Navbar = () => {
    //show responsive nav
    const navbarRef = useRef(null)
    const navbarResRef = useRef(null)
    function showNav(){
        navbarRef.current.classList.toggle("inactive")
        navbarResRef.current.classList.toggle("active")
    }

    return (
        <div className="nav-wrapper">
        <div className="inner-nav-wrapper">
          {/*logo*/}
            <div className="logo">
                <img src="https://dcs.ug.edu.gh/img/comScience_logo.png" className="logo-img" alt="logo"/>
            </div>


          {/*nav links*/}
          <div className="nav" ref={navbarRef}>
            {
                navigation.map(nav => {
                    return (
                            <NavLink className="nav-links" to={nav.href}>{nav.name}</NavLink>
                    )
                })
            }
            </div>
          <div className="nav-responsive" ref={navbarResRef}>
            {
                navigation.map(nav => {
                    return (
                            <NavLink className="nav-links" to={nav.href}>{nav.name}</NavLink>
                    )
                })
            }
            </div>



            {/*nav toggler*/}
            <div className="toggle-menu" onClick={showNav}>
               <Hamburger/>
            </div>
        </div>
        </div>
    )
}

export default Navbar