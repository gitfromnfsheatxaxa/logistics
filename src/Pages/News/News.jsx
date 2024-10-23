import React from 'react';
import { useBlog } from '../../Context.jsx';
import './News.css'; // Import your CSS file

const News = () => {
    const { posts } = useBlog(); // Access the posts from context

    return (
        <div className="news-container">
            <h1>Published News</h1>
            <div className="news-list">
                {posts.length === 0 ? (
                    <p>No news published yet.</p>
                ) : (
                    posts.map((item, index) => (
                        <div key={index} className="news-item">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            {item.image && <img src={item.image} alt="News" />}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default News;
