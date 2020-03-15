import React from 'react';
import Spinner from '../../../Spinner/Spinner';

const feedbackForm = () => {
let title = new Date().getSeconds();
return (
    <div style={{textAlign: 'center'}}>
        <iframe 
        title={title}
        src="https://docs.google.com/forms/d/e/1FAIpQLSck-gpMM4eGPaISYOtfY_6fIKIY2hMD8RIaaamwAX5JVJaeFg/viewform?embedded=true" 
        width="640" 
        height="1221" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0" 
        secure="true"
        samesite="none"
        onClick={() => <h1>Thank you for your feedback!</h1>}><Spinner /></iframe>

    </div>
);
};

export default feedbackForm;