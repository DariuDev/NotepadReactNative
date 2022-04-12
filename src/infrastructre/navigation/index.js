import React from 'react';
import {AppNavigator} from './AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

export const Navigation = () => {
  console.log(isAuthenticated, 'isAuth');
  return (
    <NavigationContainer>
       <AppNavigator /> 
    </NavigationContainer>
  );
};