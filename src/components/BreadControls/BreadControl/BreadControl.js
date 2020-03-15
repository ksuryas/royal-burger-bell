import React from 'react';
import classes from './BreadControl.module.css';

const breadControl = (props) => (
<div className={classes.BreadControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Replace} onClick={props.replace}>Choose</button>
    </div>
);

export default breadControl;