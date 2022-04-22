import React, {useContext} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Context} from '../../services/context/blogContext/BlogContext';
import IconEdit from 'react-native-vector-icons/AntDesign';

export const DetailScreen = ({navigation, route}) => {
  const {state} = useContext(Context);
  console.log(route.params.id);

  const blogPost = state.find(blogPost => blogPost.id === route.params.id);
  return (
    <View style={{flex: 1,}}>
      <Text>
        {blogPost.title}-{blogPost.content}
      </Text>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => navigation.navigate('EditNote', {id: route.params.id})}>
        <IconEdit name="edit" color="purple" size={50} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
    // height: 65,
    // width: 65,
    // borderRadius: 100 / 2,
    // borderWidth: 4,
    // borderColor: 'purple',
  },
});
