import React, { Component } from 'react';
import Address from '../Address/Address';

class ContactUs extends Component {
    render() {
        let india = 'Surya Towers, Saket Colony, South Delhi, Delhi, 110017, India';
        let usa = '6400 Windcrest Drive, Plano, TX, 75024';
        return (
            <div style={{textAlign: 'center'}}> 
                <h1 style={{color: 'green'}}>Contact Us!</h1>
                <h4 style={{color: 'skyblue'}}>Our Locations:</h4> 
                <Address country='India' address={india} />
                <Address country='USA' address={usa} />
                <h3>Questions?:</h3>
                <Address country='For Other countries/Questions' address='Whatsapp us at +1 214-1GA-AAJT' />
            </div>
        );
    };
};

export default ContactUs;