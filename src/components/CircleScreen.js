import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Circle = () => {
  return (
    <Icon
      name="pluscircleo"
      color={'black'}
      size={60}
      onPress={() => console.log('pressed')}
    />
  );
};
