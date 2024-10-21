import React, { useState, useEffect } from 'react';
import NewsComponent from './NewsComponent';

const AdminCom = () => {
    const [news, setNews] = useState([]);

    // Example fetch or hardcoded data
    useEffect(() => {
        // Fetch news or updates data from your backend API or database
        fetchNews();
    }, []);

    const fetchNews = async () => {
        // Simulate fetching data (you can replace it with your API call)
        const data = [
            { title: "News 1", content: "Content for news 1" },
            { title: "News 2", content: "Content for news 2" }
        ];
        setNews(data);
    };

    return (
        <div className="admin-com">
            <h1>Admin Panel</h1>
            <div className="news-list">
                {news.length > 0 ? (
                    news.map((item, index) => (
                        <NewsComponent key={index} title={item.title} content={item.content} />
                    ))
                ) : (
                    <p>No news available</p>
                )}
            </div>
        </div>
    );
};

export default AdminCom;
