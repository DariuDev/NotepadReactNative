import React, { useContext } from 'react';
import {View, Text, FlatList} from 'react-native';
import {BlogContext} from '../../services/blog-context.js/BlogContext';

export const IndexScreen = () => {
    const {Blogs} = useContext(BlogContext);
    return (
        <View>
        <Text>index screen</Text>
        <FlatList 
        data = {Blogs}
        keyExtractor = {(key) => {key.title} }
        renderItem = { ({item}) => <Text>{item.title}</Text>}
        />
        </View>
    );
}