import React from 'react';

const card = (props) => (
<div style={{textAlign: 'center'}}>
<h1>{props.name}</h1>
<h3>{props.description}</h3>

<select>
    <option>
        Like this review?
             </option>    
        <option>
        I like this review!
        </option>
        <option>
        I don't like this review!
        </option>
    </select>
    </div>
);

export default card;