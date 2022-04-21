import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export const CreateNoteScreen = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  return (
    <View>
      <TextInput
        label="Enter Title :"
        textContentType="Title"
        keyboardType="Enter A Title"
        autoCapitalize="none"
        value={title}
        onChangeText={text => setTitle(text)}
        style={{margin: 10}}
      />
      <TextInput
        label="Enter Content :"
        textContentType="Title"
        keyboardType="Enter A Title"
        autoCapitalize="none"
        value={content}
        onChangeText={text => setContent(text)}
        style={{margin: 10}}
      />
      <Button
        style={{marginLeft: 40, marginRight: 40, marginTop: 10}}
        mode="outlined">
        Add Note
      </Button>
    </View>
  );
};
