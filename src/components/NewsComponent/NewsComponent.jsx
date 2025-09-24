import React from 'react';
import './NewsComponent.css';

const NewsComponent = ({ el }) => {
    return (
        <div className="container-news">
            <div className="main-image" key={el.id}>
                <div className="image-card">
                    <img src={el.image} alt={el.name} className="news-image" />
                </div>
                <div className="text-box">
                    <h1 className="product-title">{el.name}</h1>
                    <p className="product-name">{el.description}</p>
                    <p className="product-time">Published {el.createdAt.slice(0, 10)}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsComponent;
