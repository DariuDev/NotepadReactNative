import createDataContext from '../dataContext/createDataContext';

const BlogReducer = (state, action) => {
  switch (action.type) {
    case 'Edit_BlogPost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'Delete_BlogPost':
      return state.filter(blogpost => blogpost.id !== action.payload);
    case 'Add_BlogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};
const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'Add_BlogPost', payload: {title, content}});
    if(callback){
      callback();
    }
  };
};
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({type: 'Delete_BlogPost', payload: id});
  };
};
const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch({
      type: 'Edit_BlogPost',
      payload: {id, title, content},
    });
    if (callback){
      callback();
    }
  };
};
export const {Context, Provider} = createDataContext(
  BlogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost},
  [],
);
