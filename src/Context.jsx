// src/context/BlogContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [array, setArray] = useState([]);
    const url = 'http://127.0.0.1:8090/api/collections/news/records/';

    const getData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setArray(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <BlogContext.Provider value={{ array: array.items, getData, setArray }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => useContext(BlogContext);
