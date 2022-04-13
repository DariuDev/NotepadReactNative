import React, {createContext, useState} from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({children}) => {
    const [BlogPost, setBlogPost] = useState([]);

    const add = () => {
        setBlogPost([...BlogPost, {title : `Blog Post #${BlogPost.length + 1}`}])
    };
    return (
        <BlogContext.Provider value={{BlogPost, addBlogPost : add}}>
            {children}
        </BlogContext.Provider>
    );
}