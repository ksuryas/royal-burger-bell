import React from 'react';

const address = (props) => {
    return (
    <div style={{textAlign: 'center', border: '1px solid orange'}}>
           <ul>
            <li style={{color: 'red'}}>{props.country}: {props.address}</li>
        </ul>
    </div>
    );
};

export default address;