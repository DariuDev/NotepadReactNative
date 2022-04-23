import React,{useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {Context} from '../../services/context/blogContext/BlogContext';

export const EditScreen = ({route}) => {
    const {state} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === route.params.id);
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  return (
    <View>
      <View>
        <TextInput
          label="Enter Title :"
          textContentType="Title"
          keyboardType="Enter A Title"
          autoCapitalize="none"
          value={title}
          onChangeText={newText => setTitle(newText)}
          style={{margin: 10}}
        />
        <TextInput
          label="Enter Content :"
          textContentType="Title"
          keyboardType="Enter A Title"
          autoCapitalize="none"
          value={content}
          onChangeText={newText => setContent(newText)}
          style={{margin: 10}}
        />
        <Button
          style={{marginLeft: 40, marginRight: 40, marginTop: 10}}
          mode="outlined"
          onPress={() =>
            addBlogPost(title, content, () => {
              navigation.navigate('Notepad');
            })
          }>
          Save
        </Button>
      </View>
    </View>
  );
};
