import React from 'react';
import classes from './BreadControl.module.css';

const breadControl = (props) => (
<div className={classes.BreadControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Replace} onClick={props.replace}>Choose</button>
    <div className={classes.Remarks}>*{props.remarks}</div>
    </div>
);

export default breadControl;