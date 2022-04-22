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
import Icon from 'react-native-vector-icons/Ionicons';
import IconAdd from 'react-native-vector-icons/AntDesign';

export const IndexScreen = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost} = useContext(Context);

  return (
    <View style={{flex: 1}}>
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
              <Icon name={'trash-outline'} size={25} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.circle}
        onPress={() => navigation.navigate('CreateNote')}>
        <IconAdd name="pluscircleo" color="purple" size={60} />
      </TouchableOpacity>
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
  circle: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
