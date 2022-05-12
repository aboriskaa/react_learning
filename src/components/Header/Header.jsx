import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <div class={classes.logo}>
            <h1>SOCIAL NETWORK PROJECT</h1>
            <h5>Developed with React</h5>
            <h5>Adaptive layout is used</h5>
        </div>
    </header>
}

export default Header;
