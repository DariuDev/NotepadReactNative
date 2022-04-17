import React, {createContext, useReducer} from 'react';

export const BlogContext = createContext();

const BlogReducer = (state, action) => {
switch(action.type){
case 'Add_BlogPost':
    return ([...state, {title: `Blog Post #${state.length + 1}`}])
    default:
        return state;
}
}

export const BlogProvider = ({children}) => {
    const [BlogPost, dispatch] = useReducer(BlogReducer, []);

    const addBlogPost = () => {
        dispatch({ type:'Add_BlogPost'});
    }
    return (
        <BlogContext.Provider value={{BlogPost, addBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
}