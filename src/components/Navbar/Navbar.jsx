import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';


let activeClassName = classes.activeLink;

const Navbar = () => {
    return (
        <nav className={classes.nav_ls + " " + classes.nav_sm}>
            <ul>
                <li>
                    <NavLink to='/profile'
                        className={({ isActive }) => isActive ? activeClassName : undefined}
                    >Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' className={({ isActive }) => isActive ? activeClassName : undefined}
                    >Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav >
    );
}

export default Navbar;

