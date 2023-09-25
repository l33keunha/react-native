import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

export default () => {
    return <View style={stlyes.shadow}></View>;
}

const stlyes = StyleSheet.create({
    shadow: {
        backgroundColor: '#fff',
        width: 200,
        height: 200, 
        ...Platform.select({
            android: {
                elevation: 20,
            }
        })
    }
})