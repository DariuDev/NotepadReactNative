import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const NoteInput = ({onSubmit, initialValue}) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);
  return (
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
        onPress={() => onSubmit(title, content)}>
        Save Note
      </Button>
    </View>
  );
};
NoteInput.defaultProps = {
  initialValue: {
    title: '',
    content: '',
  },
};
const style = StyleSheet.create({});

export default NoteInput;
