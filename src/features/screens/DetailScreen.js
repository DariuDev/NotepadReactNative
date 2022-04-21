import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Context} from '../../services/context/blogContext/BlogContext';

export const DetailScreen = ({route}) => {
  const {state} = useContext(Context);
  console.log(route.params.id)

  const blogPost = state.find(
    blogPost => blogPost.id === route.params.id
  );
  return <View><Text>{blogPost.title}-{blogPost.content}</Text></View>;
};
