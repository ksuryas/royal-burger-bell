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
    <h5>Delivery/Ready to be Picked up Time: <strong style={{color: 'skyBlue'}}>1 hour and 2 minutes</strong></h5>
    <h4>Any Delays?: <strong>No!</strong></h4>
    <h3>We hope to see you again:</h3>
    <Button btnType="Success" clicked={this.navigateHandler} openTab="_blank">Make another burger!</Button>
    <Button btnType="Danger" goTo="https://tinyurl.com/wpgler7" openTab="_blank">Give Feedback!</Button>
    <Button btnType="Success" goTo="/contact-us" openTab="_blank">Contact Us Here</Button>
    </div>
);
};
};

export default thankYou;