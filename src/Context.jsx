// src/context/BlogContext.js
import React, { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        setPosts((prevPosts) => [...prevPosts, post]);
    };

    return (
        <BlogContext.Provider value={{ posts, addPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => useContext(BlogContext);
