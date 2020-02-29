import React from 'react';
import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
            </li>        
        );
      });
return (
    <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
    <ul>
   {ingredientSummary}
    </ul>
   <div>
   <p><strong>Before Tax Price: {'$' + props.beforeTax}</strong></p>
   <p><strong>Total Tax: {'$' + props.tax}</strong></p>
   <p><strong style={{color: 'green'}}>Total Price: {'$' + props.price}</strong></p>
   <p>Continue to Checkout?</p>
   </div>

    <Button btnType="Danger" clicked={props.cancelled}>CANCEL</Button>
    <Button btnType="Success" clicked={props.continued}>CONTINUE</Button>
    </Aux>
);
};

export default orderSummary;