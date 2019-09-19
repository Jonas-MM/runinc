import React from 'react';
import ContactForm from './ContactForm'
import ContactMap from './ContactMap';

const Contact = () => {
    return (
        <div className="container d-flex">
            <ContactMap />
            <ContactForm />
        </div>
    );
}

export default Contact;