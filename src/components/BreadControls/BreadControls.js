import React from 'react';
import classes from './BreadControls.module.css';
import BreadControl from '../BreadControls/BreadControl/BreadControl';

const controls = [
    {label: 'Default', type: 'seeds'},
    {label: 'Plain', type: 'plain'},
    {label: 'Gluten Free', type: 'glutenFree'},
    {label: 'Potato', type: 'potato'},
    {label: 'Sliced', type: 'sliced'}
];

const breadControls = (props) => (
    <div className={classes.BreadControls}>
            <p>Current Price: <strong style={{color: 'green'}}>{'$' + props.breadPrice}</strong></p>
            {controls.map(ctrl => (
            <BreadControl 
            replace={() => props.replaceBreadType(ctrl.type)}
            key={ctrl.label} 
            label={ctrl.label}
            />
        ))}  
        <button 
        onClick={props.continued}
        className={classes.ContinueButton} 
        disabled={props.purchaseable}>{props.isAuth ? 'Continue' : 'Click to continue with the next step!'}</button>
    </div>
);

export default breadControls;