import React, {useContext} from 'react';
import './News.css';
import {BlogContext} from "../../Context.jsx";
import NewsComponent from "../../components/NewsComponent/NewsComponent.jsx";

const News = ({el}) => {
    const {array} = useContext(BlogContext);
    return (
        <div className="news-container">
            <div className="Nice">
                {
                    array?.map(el => {
                       return  <NewsComponent key={el?.id} el={el}/>
                    })
                }
            </div>
        </div>
    );
};

export default News;
