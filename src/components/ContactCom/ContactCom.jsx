import React, { useState } from 'react';
import axios from 'axios';
import './ContactsCom.css'; // Make sure to create this CSS file

const ContactsCom = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const BOT_TOKEN = '8093316717:AAHTCqtW189UlkgnW8X2SezZzOYSGdKwrx0'; // Your Bot Token
    const CHAT_ID = '-4508871797'; // Your Chat ID

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(''); // Clear previous status messages

        const caption = `Contact Request:\nName: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`;

        try {
            const messageResponse = await axios.post(
                `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                {
                    chat_id: CHAT_ID,
                    text: caption
                }
            );

            if (messageResponse.data.ok) {
                setStatus('Message sent successfully!');
            } else {
                setStatus('Error sending message: ' + messageResponse.data.description);
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setStatus('An error occurred while sending. Check the console for details.');
        }
    };

    return (
        <div className="contacts-container">
            <h1 className="contacts-header">Contact Us</h1>
            <form onSubmit={handleSubmit} className="contacts-form">
                <label htmlFor="name">Your Full Name <span style={{ color: 'red' }}>*</span></label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="phone">Phone Number <span style={{ color: 'red' }}>*</span></label>
                <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button type="submit">Send Message</button>

                {/* Display status messages */}
                <h3 className="status">
                    {status && <p>{status}</p>}
                </h3>
            </form>
        </div>
    );
};

export default ContactsCom;
