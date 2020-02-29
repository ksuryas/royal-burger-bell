import React, { Component } from 'react';
import classes from './Intro.module.css';
import Card from './Card/Card';
import Button from '../Button/Button';

class Intro extends Component {
    navigateHandler = () => {
    this.props.history.push('/burger-builder');  
   };

    render() {
    return (
    <div className={classes.Intro}>
    <h1>Welcome to the Royal Burger Bell (RBB), User!</h1> 
    <h4>The best burger ever with #1 quality! Way tastier than McDonald burgers!</h4>
    <h3>Make your own burger by pressing the button below and order it right now:</h3>
        <Button btnType="Success" style={{fontSize: 'larger'}} clicked={this.navigateHandler}>Make a burger!</Button>    
        <h2>Reviews of our app:</h2>
        <Card name="Bob Smith" description="I love this thing! You should order a burger, man! They are delicious." />
        <Card name="Jason" description="It's all awesome. The burgers are delicious. Their customer service is awesome too!" />
        <Card name="Jagdeesh" description="I loved it, man! Burgers are mouth-watery!!" />
        </div>
    );
  }
};

export default Intro;