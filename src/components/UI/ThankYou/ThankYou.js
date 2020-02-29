import React, { Component } from 'react';
import Button from '../Button/Button';
import classes from './ThankYou.module.css';

class thankYou extends Component {
    navigateHandler = () => {
      this.props.history.push('/burger-builder');  
    };
    render() {
    return (
  <div className={classes.ThankYou}>
    <h1>Your order has been confirmed!</h1>
    <h2>Thank you for ordering a burger.</h2>
    <h5>Delivery Time: <strong style={{color: 'skyBlue'}}>1 hour and 2 minutes</strong></h5>
    <h4>Delivery Delays?: <strong>No!</strong></h4>
    <h3>We hope to see you again:</h3>
    <Button btnType="Success" clicked={this.navigateHandler}>Make another burger!</Button>
    <Button btnType="Danger" goTo="https://tinyurl.com/wpgler7">Give Feedback!</Button>
    </div>
);
};
};

export default thankYou;