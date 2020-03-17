import React from 'react';
import classes from './BreadControls.module.css';
import BreadControl from '../BreadControls/BreadControl/BreadControl';
import Aux from '../../hoc/Auxilliary/Auxilliary';

const controls = [
    {label: 'Sesame Seeds', type: 'seeds', remarks: 'The Default: Low Carbs, High Protein & Good Fat - Good for health'},
    {label: 'Plain', type: 'plain', remarks: 'Not Tasty & Recommended!'},
    {label: 'Gluten Free', type: 'glutenFree', remarks: '2nd best for Diabetes patients!'},
    {label: 'Potato', type: 'potato', remarks: 'Increases B.P. for Diabetes patients!'},
    {label: 'Wheat', type: 'wheat', remarks: 'First best for Diabetes patients!'}
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
            remarks={ctrl.remarks}
            />
        ))}  
        <a href={"/burger-builder#" + props.hrefHash}>
        <button 
      className={classes.ContinueButton}>{props.isAuth ? 'Continue' : 'Click to continue with the next step!'}</button>
      </a>
    </div>
    </Aux>
);

export default breadControls;