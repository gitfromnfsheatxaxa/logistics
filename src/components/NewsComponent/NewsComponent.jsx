import React from 'react';
import './NewsComponent.css';

const AdminCom = ({ el }) => {

<<<<<<< HEAD
    // const imageUrl = `http://63.141.255.241:8080/api/files/${el.collectionId}/${el.id}/${el.image[0]}`;
    const imageUrl = ""
=======
    const imageUrl = `http://63.141.255.241:8080/api/files/${el.collectionId}/${el.id}/${el.image[0]}`;
>>>>>>> d3ee532e9bc97f054d76633b143b5da9a53f6bcf
    return (
        <div className="container-news">
            <div className="main-image" key={el.id}>
                <div className="image-card">
                    <img src={imageUrl} alt={el.title} className="news-image" />
                </div>
                <div className="text-box">
                    <h1 className="product-title">{el.title}</h1>
                    <p className="product-name">{el.description}</p>
                    <p className="product-time">Published {el.created.slice(0, 10)}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminCom;
