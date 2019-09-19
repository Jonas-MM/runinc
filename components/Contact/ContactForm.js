import React from 'react'

const ContactForm = () => {
    return (
        <div id="contactform" className="container">
            <h4>SEND EN BESKED</h4>
            <form action="#">
                <span>NAVN:</span>
                <input type="text" />
                <span>EMAIL:</span>
                <input type="text" />
                <span>TELEFONNR:</span>
                <input type="text" />
                <span>BESKED:</span>
                <textarea rows="16" cols="50">
                </textarea>
                <button>SEND BESKED</button>
            </form>
        </div>

    );
}

export default ContactForm;