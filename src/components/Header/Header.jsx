import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    // localLogout {

    // }

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <h1>SOCIAL NETWORK PROJECT</h1>
                <h5>Developed with React</h5>
                <h5>Adaptive layout is used</h5>
            </div>

            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                    : <NavLink to='/login' >LOGIN</NavLink>
                }
            </div>



        </header>
    );
}

export default Header;

/* <NavLink to='/profile' className={({ isActive }) => isActive ? activeClassName : undefined}
            >Profile
            </NavLink> */