import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
<a href={props.goTo}>
<button
className={[classes.Button, classes[props.btnType]].join(' ')}
onClick={props.clicked}
disabled={props.disabled}>{props.children}</button></a>
);

export default button;