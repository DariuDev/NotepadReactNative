import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IndexScreen} from '../../features/screens/IndexScreen';
import {DetailScreen} from '../../features/screens/DetailScreen';
import {CreateNoteScreen} from '../../features/screens/CreateNoteScreen';
import { EditScreen } from '../../features/screens/EditScreen';

const stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <stack.Navigator headerMode="false">
      <stack.Screen name="Notepad" component={IndexScreen} />
      <stack.Screen name="Detail" component={DetailScreen} />
      <stack.Screen name="CreateNote" component={CreateNoteScreen} />
      <stack.Screen name="EditNote" component={EditScreen} />
    </stack.Navigator>
  );
}