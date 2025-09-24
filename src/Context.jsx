import React, { createContext, useState, useContext, useEffect } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [array, setArray] = useState([]);
    const url = `https://midnight-sec-back.onrender.com/api/products/`;

    const getData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setArray(data); // directly set the array
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <BlogContext.Provider value={{ array, getData, setArray }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => useContext(BlogContext);
