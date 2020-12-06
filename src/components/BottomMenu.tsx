import { Link } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const bottomMenuStyles = StyleSheet.create({
    container: {
        borderWidth:1,
        flexDirection: 'row'
    },
    button: {
        flex: 1
    }
});

//@ts-ignore
export default function BottomMenu({ navigation }) {
    return (
        <View style={bottomMenuStyles.container}>
            <View style={bottomMenuStyles.button}>
                <Button title='Movies List' onPress={ () => navigation.navigate('MovieList', {}) } />
            </View>
            <View style={bottomMenuStyles.button}>
                <Button title='Upload Image' onPress={ () => navigation.navigate('UploadImage', {}) } />
            </View>
        </View>
    );
}
