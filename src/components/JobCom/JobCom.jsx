import React, {useState} from 'react';
import axios from 'axios';
import {useBlog} from '../../Context';

const JobCom = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState(null); // Change from photo to file
    const [status, setStatus] = useState('');

    const {addPost} = useBlog();

    const BOT_TOKEN = '8093316717:AAHTCqtW189UlkgnW8X2SezZzOYSGdKwrx0';
    const CHAT_ID = '-4508871797';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(''); // Clear previous status messages

        const formData = new FormData();
        if (file) {
            formData.append('document', file); // Change to 'document'
        }
        try {
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
                            caption: `Details:\nName: ${name}\nMessage: ${message}`
                        }
                    }
                );
                if (uploadResponse.data.ok) {
                    setStatus('File sent successfully!');
                } else {
                    setStatus('Error sending file.');
                }
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setStatus('An error occurred while sending. Check the console for details.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="telegram-form">
            <label htmlFor="name">Write your Full name</label>
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
                required
            />

            <label htmlFor="file">Upload Your CV (Optional, PDF, DOC, etc.):</label>
            <input
                type="file"
                id="file"
                accept=".pdf,.doc,.docx,.txt" // Accept multiple file formats
                onChange={(e) => setFile(e.target.files[0])}
            />

            <button type="submit">Submit</button>

            {/* Display status messages */}
            {status && <p>{status}</p>}
        </form>
    );
};

export default JobCom;
