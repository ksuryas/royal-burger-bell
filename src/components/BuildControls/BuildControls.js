import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Avacados', type: 'avacados'},
    {label: 'Tofu', type: 'tofu'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
            <p>Current Price: <strong style={{color: 'green'}}>{'$' + props.price}</strong></p>
            {controls.map(ctrl => (
            <BuildControl 
            added={() => props.onIngredientAdded(ctrl.type)} 
            removed={() => props.onIngredientRemoved(ctrl.type)}
            reset={() => props.resetBurger(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            key={ctrl.label} 
            label={ctrl.label}
            />
        ))}  
        <button 
        onClick={props.ordered}
        className={classes.OrderButton} 
        disabled={!props.purchaseable}>{props.isAuth ? 'ORDER NOW' : 'Signup or sign in to continue!'}</button>
    </div>
);


export default buildControls;