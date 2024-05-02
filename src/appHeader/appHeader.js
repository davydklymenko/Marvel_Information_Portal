import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './appHeader.css';

function AppHeader() {
    return (
        <>
            <div className="whapper">
                <Link className="logo" to="/">bohonkocronko.online</Link>

                <ul className="links-whapper">
                    <NavLink className="face-on-link" 
                             exact 
                             style={({ isActive }) => ({color: isActive ? '#ffffffc1' : 'inherit'})} 
                             to="/teachers">Faces Teacher</NavLink>

                    <NavLink className="face-on-link" 
                             exact 
                             style={({ isActive }) => ({color: isActive ? '#ffffffc1' : 'inherit'})} 
                             to="/noname">No name</NavLink>
                             
                    <NavLink className="face-on-link" 
                             exact 
                             style={({ isActive }) => ({color: isActive ? '#ffffffc1' : 'inherit'})} 
                             to="/marta">Marta</NavLink>
                </ul>
            </div>
        </>
    )
}

export default AppHeader;