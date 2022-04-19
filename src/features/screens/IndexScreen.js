import React, { useContext } from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {Context} from '../../services/context/blogContext/BlogContext';

export const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context);
   return (
        <View>
            <Button title={'ADD'} onPress={addBlogPost}/>
        <Text>index screen</Text>
        <FlatList 
        data = {state}
        keyExtractor = {(key) => {key.title} }
        renderItem = { ({item}) => <Text>{item.title}</Text>}
        />
        </View>
    );
}