import React from 'react';
import NewsComponent from '../../components/NewsComponent/NewsComponent.jsx';

const News = ({ news }) => {
    return (
        <div className="news-page">
            <div className="news-list">
                {news && news.length > 0 ? (
                    news.map((item, index) => (
                        <NewsComponent key={index} title={item.title} content={item.content}/>
                    ))
                ) : (
                    <p>No news available</p>
                )}
            </div>

        </div>
    );
};

export default News;
