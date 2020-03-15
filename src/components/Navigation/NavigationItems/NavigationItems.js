import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import Aux from '../../../hoc/Auxilliary/Auxilliary';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Home - RBB</NavigationItem>
    <NavigationItem link="/burger-builder">Burger Builder</NavigationItem>
    { props.isAuth ? <NavigationItem title="View my orders" link="/orders">My Orders</NavigationItem> : null }
    { !props.isAuth ? <NavigationItem title="Authenticate" link="/auth">Signup or Sign In</NavigationItem> 
    : (
    <Aux>
    <NavigationItem link="/logout">Logout</NavigationItem> 
    <NavigationItem title="Feedback" link="/feedback-form">Give Feedback</NavigationItem>
    </Aux>
    )}
    <NavigationItem title="Contact Us" link="/contact-us">Contact Us</NavigationItem>
    </ul>
);

export default navigationItems;