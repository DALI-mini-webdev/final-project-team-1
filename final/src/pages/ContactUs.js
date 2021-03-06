import React from 'react';
import Form from '../components/Form.js';
import '../components/Form.css'

function ContactUs(){

const contactList = ["610-213-2922", "suggestionbox@gmail.com"];
const contactMap = contactList.map((method) => {
    return(
    <p className="green-text">{method}</p>
    )
});

return(
    <div>
        <h1>Contact US!!!</h1>
        <div>
            <p className="green-text">Our information:</p>
            <div>{contactMap}</div>
        </div>
    </div>
);

}

export default ContactUs;