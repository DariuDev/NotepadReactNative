import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../../services/context/blogContext/BlogContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const IndexScreen = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);

  return (
    <View>
      <Button title={'ADD'} onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={key => {
          key.title;
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {id: item.id})}
            style={styles.items}>
            <Text>
              {item.title}-{item.id}
            </Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Ionicons name={'md-restaurant'} size={20}></Ionicons>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  items: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
