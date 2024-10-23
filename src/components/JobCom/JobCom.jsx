import React, {useState} from 'react';
import axios from 'axios';
import {useBlog} from '../../Context';
import "./JobCom.css"

const JobCom = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('');
    const [userType, setUserType] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [additionalContact, setAdditionalContact] = useState('');

    const {addPost} = useBlog();

    const BOT_TOKEN = '8093316717:AAHTCqtW189UlkgnW8X2SezZzOYSGdKwrx0'; // Your Bot Token
    const CHAT_ID = '-4508871797'; // Your Chat ID

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(''); // Clear previous status messages

        const formData = new FormData();
        if (file) {
            formData.append('document', file);
        }

        // Construct the message with user details
        const caption = `Details: From job offer\nName: ${name}\nMessage: ${message}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n Job_type: ${userType}${additionalContact ? `\nAdditional Contact: ${additionalContact}` : ''}`;

        try {
            // Only send the document if it exists
            if (file) {
                const uploadResponse = await axios.post(
                    `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        params: {
                            chat_id: CHAT_ID,
                            caption: caption
                        }
                    }
                );

                if (uploadResponse.data.ok) {
                    setStatus('File sent successfully!');
                } else {
                    setStatus('Error sending file: ' + uploadResponse.data.description);
                }
            } else {
                // If no file is attached, send just the message
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
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setStatus('An error occurred while sending. Check the console for details.');
        }
    };

    return (
        <>
            <h1 className="apply">Apply for the Company</h1>
            <form onSubmit={handleSubmit} className="telegram-form">

                <label htmlFor="name">Write your Full name <span style={{color: 'red'}}>*</span></label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="phone">Phone Number <span style={{color: 'red'}}>*</span>:</label>
                <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <label htmlFor="user-type">In which offer are you interested in?</label>
                <select
                    id="user-type"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                >
                    <option value="Company Driver">Company Driver</option>
                    <option value="Owner Operator">Owner Operator</option>
                </select>
                <label htmlFor="additional-contact">Additional Contact (Optional):</label>
                <input
                    type="text"
                    id="additional-contact"
                    value={additionalContact}
                    onChange={(e) => setAdditionalContact(e.target.value)}
                    placeholder="LinkedIn, Telegram, etc."
                />

                <label htmlFor="file">Upload Your CV (PDF, DOC, etc.) :</label>
                <input
                    type="file"
                    id="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <button type="submit">Submit</button>

                {/* Display status messages */}
                <h3 className="status">
                    {status && <p>{status}</p>}
                </h3>
            </form>
        </>
    )
        ;
};

export default JobCom;
