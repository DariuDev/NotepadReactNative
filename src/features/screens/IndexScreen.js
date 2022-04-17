import React, { useContext } from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {BlogContext} from '../../services/blog-context.js/BlogContext';

export const IndexScreen = () => {
    const {BlogPost, addBlogPost} = useContext(BlogContext);
   return (
        <View>
            <Button title={'ADD'} onPress={addBlogPost}/>
        <Text>index screen</Text>
        <FlatList 
        data = {BlogPost}
        keyExtractor = {(key) => {key.title} }
        renderItem = { ({item}) => <Text>{item.title}</Text>}
        />
        </View>
    );
}