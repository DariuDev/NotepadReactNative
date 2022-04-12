import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IndexScreen} from '../../features/screens/IndexScreen';

const stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <stack.Navigator headerMode="false">
      <stack.Screen name="Blog" component={IndexScreen} />
    </stack.Navigator>
  );
}