import React from 'react';
import {AppNavigator} from './AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

export const Navigation = () => {
  return (
    <NavigationContainer>
       <AppNavigator /> 
    </NavigationContainer>
  );
};