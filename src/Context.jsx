    // src/context/BlogContext.js
    import React, { createContext, useState, useContext, useEffect } from 'react';

    export const BlogContext = createContext();

<<<<<<< HEAD
    export const BlogProvider = ({ children }) => {
        const [array, setArray] = useState([]);
        // const url = 'http://63.141.255.241:8080/api/collections/trucks/records';
            const url ="";
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
=======
export const BlogProvider = ({ children }) => {
    const [array, setArray] = useState([]);
    const url = 'http://63.141.255.241:8080/api/collections/trucks/records';
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
>>>>>>> d3ee532e9bc97f054d76633b143b5da9a53f6bcf

        return (
            <BlogContext.Provider value={{ array: array.items, getData, setArray }}>
                {children}
            </BlogContext.Provider>
        );
    };

    export const useBlog = () => useContext(BlogContext);
