import createDataContext from '../dataContext/createDataContext';

const BlogReducer = (state, action) => {

    switch(action.type){
        case 'Add_BlogPost':
        return ([...state, {title: `Blog Post #${state.length + 1}`}])
        default:
        return state;
}
}
  const addBlogPost = (dispatch) => {
      return () => {
        dispatch({ type:'Add_BlogPost'});
      }
    };
    export const {Context, Provider} = createDataContext(
        BlogReducer, 
        {addBlogPost}, 
        []);

