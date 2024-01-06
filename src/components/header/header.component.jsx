import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
import './header.style.scss'

const Header = ()=>(
    <div className="header">
       <Link  className="logo-container" to= '/'>
        <Logo className="logo"/>
       </Link>
       <div className="options">
        <Link  className = 'option' to = 'shop' >
            <span>shop</span>
        </Link>
        <Link to = '/shop' className="option">
            <span>Contact</span>
            </Link>
       </div>
    </div>
)
export default Header;