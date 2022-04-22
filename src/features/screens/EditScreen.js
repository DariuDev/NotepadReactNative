import React from 'react';
import {View, Text} from 'react-native';

export const EditScreen = ({route}) => {
    return (
        <View>
            <Text>Edit Screen-{route.params.id}</Text>
        </View>
    );
}