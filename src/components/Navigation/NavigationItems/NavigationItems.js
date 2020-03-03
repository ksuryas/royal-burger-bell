import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Home - RBB</NavigationItem>
    <NavigationItem link="/burger-builder">Burger Builder</NavigationItem>
    { props.isAuth ? <NavigationItem link="/orders">My Orders</NavigationItem> : null }
    { !props.isAuth ? <NavigationItem link="/auth">Signup or Sign In</NavigationItem> 
    : <NavigationItem link="/logout">Logout</NavigationItem> 
    }
    <NavigationItem link="/contact-us">Contact Us</NavigationItem>
    </ul>
);

export default navigationItems;