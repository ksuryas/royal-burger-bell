import React from "react";
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => (
  <div className={classes.CheckoutSummary}>
      <h1>Checkout</h1>
      <h4>Preview of Your Burger:</h4>
      <div style={{width: '100%', textAlign: 'center', margin: 'auto'}}>
          <Burger ingredients={props.ingredients} />
        </div>  
        <Button btnType="Danger" clicked={props.cancelledCheckout}>CANCEL</Button>
        <Button btnType="Success" clicked={props.continuedCheckout} disabled={props.disabled}>CONTINUE</Button>
        </div>  
);

export default checkoutSummary;