import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import Aux from '../../../hoc/Auxilliary/Auxilliary';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
    <NavigationItem title="RBB Homepage" link="/" exact>Home - RBB</NavigationItem>
    <NavigationItem title="RBB - Build a burger" link="/burger-builder">Burger Builder</NavigationItem>
    { props.isAuth ? <NavigationItem title="RBB - View my orders" link="/orders">My Orders</NavigationItem> : null }
    { !props.isAuth ? <NavigationItem title="RBB - Authenticate" link="/auth">Signup or Sign In</NavigationItem> 
    : (
    <Aux>
    <NavigationItem title="RBB - Unauthenticate" link="/logout">Logout</NavigationItem> 
    <NavigationItem title="RBB - Feedback" link="/feedback-form">Give Feedback</NavigationItem>
    </Aux>
    )}
    <NavigationItem title="RBB - Contact Us" link="/contact-us">Contact Us</NavigationItem>
    </ul>
);

export default navigationItems;