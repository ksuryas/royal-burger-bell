import React from 'react';
import classes from './Spinner.module.css';

const spinner = () => (
    <div className={classes.Loader} style={{textAlign: 'center'}}>Loading...</div>
);

export default spinner;