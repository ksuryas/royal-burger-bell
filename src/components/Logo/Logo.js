import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <a href="/"><img src={burgerLogo} alt="Logo of Royal Burger Bell" /></a>
    </div>
);

export default logo;