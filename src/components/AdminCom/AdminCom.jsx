import React, { useState } from 'react';
import { useBlog } from '../../Context.jsx';
import '../../Pages/Admin/Admin.css';

const AdminPage = () => {
    const { addPost } = useBlog();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) {
            const newItem = {
                title,
                description,
                image,
            };
            addPost(newItem);
            setTitle('');
            setDescription('');
            setImage(null);
            console.log(0)
        }else{
            console.log(1)
        }
    };

    return (
        <div className="admin-container">
            <form className="admin-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                />
                <button type="submit">Post News</button>
            </form>
        </div>
    );
};

export default AdminPage;
