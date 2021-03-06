import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputEl = null;
    let inputClasses = [classes.InputEl];

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch(props.elementType) {
        case('input'):
            inputEl = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
        break;
        case('textarea'): 
        inputEl = <textarea className={inputClasses} {...props.elementConfig} value={props.value} onChange={props.changed} />;
        break;
        case('select'): 
        inputEl = (
        <div>
         {props.msg}   <select className={inputClasses} value={props.value} onChange={props.changed}>
            {props.elementConfig.options.map(option => (
                <option value={option.value} key={option.value}>{option.displayValue}</option> 
            ))}
        </select>
            </div>
            );
    break;
        default:
        inputEl = <input className={inputClasses} {...props.elementConfig} value={props.value} onChange={props.changed} />;
    };
    let labelClass = [classes.Label];
    return (
    <div className={classes.Input}>
    <label className={labelClass}>{props.label}:</label> {inputEl}       
    </div>
);
};

export default input;