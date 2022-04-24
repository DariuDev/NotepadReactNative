import React, {useContext} from 'react';
import {Context} from '../../services/context/blogContext/BlogContext';
import NoteInput from '../../components/NoteInput';

export const CreateNoteScreen = ({navigation}) => {
  const {addBlogPost} = useContext(Context);

  return (
   <NoteInput onSubmit={(title, content)=> {
     addBlogPost(title, content, () => navigation.navigate('Notepad')) 
   }}/>
  );
};
