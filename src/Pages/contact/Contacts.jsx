import React from 'react';
import ContactCom from "../../components/ContactCom/ContactCom.jsx";
import '../Pages.css'; // Assuming you have a CSS file for styling

const Contacts = () => {
    return (
        <div className="contacts-container">
            <h1 className="contacts-heading">Get in Touch</h1>
            <p className="contacts-description">
                We’re here to help! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
                Please fill out the form below, and we will get back to you as soon as possible.
            </p>
            <ContactCom/>
        </div>
    )
}

export default Contacts;
