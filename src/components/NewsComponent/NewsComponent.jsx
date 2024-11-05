import React from 'react';
import './NewsComponent.css';

const AdminCom = ({ el }) => {
    const imageUrl = `http://127.0.0.1:8090/api/files/${el.collectionId}/${el.id}/${el.image[0]}`;

    return (
        <div className="container-news">
            <div className="main-image" key={el?.id}>
                <div className="image-card">
                    <img src={imageUrl} alt={el.title} className="news-image" />
                </div>
                <div className="text-box">
                    <h1 className="product-title">{el?.title}</h1>
                    <p className="product-name">{el?.description}</p>
                    <p className="product-time">Published {el?.created.slice(0, 10)}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminCom;
