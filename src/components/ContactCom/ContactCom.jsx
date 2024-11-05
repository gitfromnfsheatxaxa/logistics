import React, {useState} from 'react';
import axios from 'axios';
import './ContactsCom.css';

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
            <h1 className="apply">Contact Us</h1>

            <form onSubmit={handleSubmit} className="contacts-form">
                <div>
                    <label htmlFor="name">Your Name<b>*</b></label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email<b>*</b></label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber">Phone Number<b>*</b></label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="city">City*</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>

                <div className="textarea-container">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <div className="btn-container">
                    <button type="submit">Submit Message</button>
                    <h3 className="status">{status && <p>{status}</p>}</h3>
                </div>
            </form>
        </div>
    );
};

export default ContactsCom;
