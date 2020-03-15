import React from 'react';
import classes from './BreadControls.module.css';
import BreadControl from '../BreadControls/BreadControl/BreadControl';
import Aux from '../../hoc/Auxilliary/Auxilliary';

const controls = [
    {label: 'Sesame Seeds', type: 'seeds'},
    {label: 'Plain', type: 'plain'},
    {label: 'Gluten Free', type: 'glutenFree'},
    {label: 'Potato', type: 'potato'},
    {label: 'Sliced', type: 'sliced'}
];

const breadControls = (props) => (
 <Aux>
     <h1 style={{textAlign: 'center', fontWeight: 'bold'}}>Pick your favorite type of bread below:</h1>
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
        className={classes.ContinueButton}>{props.isAuth ? 'Continue' : 'Click to continue with the next step!'}</button>
    </div>
    </Aux>
);

export default breadControls;