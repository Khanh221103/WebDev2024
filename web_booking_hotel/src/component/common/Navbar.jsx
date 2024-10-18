import React from 'react';
import { NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/home">Muong Thanh Hotel</NavLink>
            </div>
            <ul className="navbar-ul">
                <li><NavLink to="/home" classname="active">Home</NavLink></li>
                <li><NavLink to="/rooms" classname="active">Rooms</NavLink></li>
                <li><NavLink to="/find-booking" classname="active">Find my Booking</NavLink></li>

                <li><NavLink to="/login" classname="active">Login</NavLink></li>
                <li><NavLink to="/register" classname="active">Register</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
