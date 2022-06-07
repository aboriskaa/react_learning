import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={style.header}>
            <div className={style.logo}>
                <h1>SOCIAL NETWORK PROJECT</h1>
                <h5>Developed with React</h5>
                <h5>Adaptive layout is used</h5>
            </div>

            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to='/profile' >LOGIN:</NavLink>}
            </div>


            {/* <NavLink to='/profile' className={({ isActive }) => isActive ? activeClassName : undefined}
                    >Profile
                    </NavLink> */}
        </header>
    );
}

export default Header;

