import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
<a href={props.goTo} target={props.openTab}>
<button
className={[classes.Button, classes[props.btnType]].join(' ')}
style={props.style}
onClick={props.clicked}
disabled={props.disabled}>{props.children}</button></a>
);

export default button;