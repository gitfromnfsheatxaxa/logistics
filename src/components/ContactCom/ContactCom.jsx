import React, { useState } from 'react';
import axios from 'axios';
import './ContactsCom.css';
import icon1 from '../../../public/Icon.png';
import icon2 from '../../../public/Icon (1).png';
import icon3 from '../../../public/Icon (2).png';
const ContactsCom = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const BOT_TOKEN = '8093316717:AAHTCqtW189UlkgnW8X2SezZzOYSGdKwrx0'; // Your Bot Token
    const CHAT_ID = '-4508871797';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('');

        const caption = `Contact Request:\nName: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nCity: ${city}\nMessage: ${message}`;

        try {
            const messageResponse = await axios.post(
                `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                {
                    chat_id: CHAT_ID,
                    text: caption,
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
            <div className="contacts-header">
                <h1>Contact Us</h1>
                <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
            </div>

            <div className="contacts-info">
                <div className="contact-item">
                    <img src={icon1} alt=""/>
                    <p>Contact@logistics.com</p>
                </div>
                <div className="contact-item">
                    <img src={icon2} alt=""/>

                    <p>(00) 112 365 489</p>
                </div>
                <div className="contact-item">
                    <img src={icon3} alt=""/>

                    <p>Mon – Sat 9.00 – 18.00<br/>Sunday Closed</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="contacts-form">
                <input
                    type="text"
                    placeholder="Your name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone Number*"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="City*"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Submit Message</button>
            </form>
            <h3 className="status">{status && <p>{status}</p>}</h3>
        </div>
    );
};

export default ContactsCom;
