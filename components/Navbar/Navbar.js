import React from 'react'
import App from '../../App.css'
import Logo from '../../logo.png'
import { NavLink, withRouter } from 'react-router-dom'
 

const Navbar = () => {
    return (
        <div className="container">
            <nav>
                <ul className="center-align">
                    <li className="hide-on-small-only"><img src={Logo} id="Logo" alt="" /></li>
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/event">Events</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/contact">Contact us</NavLink></li>
                    <p className="hide-on-large-only">ikon</p>
                    <form className="hide-on-med-and-down right">
                        <input type="text" />
                        <button className="btn" type="submit">Search</button>
                    </form>
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(Navbar);