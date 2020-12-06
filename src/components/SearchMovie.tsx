import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input } from 'react-native-elements';

const searchMovieStyles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        marginTop: 10,
        paddingHorizontal: 5
    }
});

interface SearchMovieProps {
    changeSearchName: (text: string) => any;
}

export default function SearchMovie(props: SearchMovieProps) {
    return (
        <View>
            <Input style={searchMovieStyles.input} onChangeText={(text: string) => props.changeSearchName(text)}/>
        </View>
    );
}
