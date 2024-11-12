import React, {useContext} from 'react';
import './News.css';
import {BlogContext} from "../../Context.jsx";
import NewsComponent from "../../components/NewsComponent/NewsComponent.jsx";
import {Link} from "react-router-dom";

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
                <Link to="/job"><button>Contact us</button></Link>
            </div>

        </div>
    );
};

export default News;
