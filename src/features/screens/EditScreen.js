import React, {useContext} from 'react';

import {Context} from '../../services/context/blogContext/BlogContext';
import NoteInput from '../../components/NoteInput';

export const EditScreen = ({route, navigation}) => {
  const id = route.params.id
  const {state, editBlogPost} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <NoteInput
      initialValue={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop())
      }}
    />
  );
};
