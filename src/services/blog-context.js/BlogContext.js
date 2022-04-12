import React, {createContext} from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({children}) => {
    const Blogs = [{title:'#1'} , {title:'#2'}]
    return (
        <BlogContext.Provider value={{Blogs}}>
            {children}
        </BlogContext.Provider>
    );
}