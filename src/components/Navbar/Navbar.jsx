import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';


let activeClassName = styles.activeLink;

const Navbar = () => {
    return (
        <nav className={styles.nav_ls + " " + styles.nav_sm}>
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
                    <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to='/users' activeClassName={styles.activeLink}>Users</NavLink>
                </li>
                <li>
                    <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav >
    );
}

export default Navbar;

