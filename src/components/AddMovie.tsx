import React, { useState } from 'react';
import { Alert, Button } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Movie } from '../utils/Movie';

const addMovieStyles = StyleSheet.create({
    title: {
        lineHeight: 34,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'white',
        paddingVertical: 10,
        marginVertical: 5
    }
});

interface AddMovieProps {
    updateMoviesList: (newMovie: Movie) => any;
}

export default function AddMovie(props: AddMovieProps) {

    const [title, setTitle] = useState<string>();
    const [imdbId, setImdbId] = useState<string>();
    const [type, setType] = useState<string>();
    const [year, setYear] = useState<number>();

    const handleAddMovie = () => {
        if ([imdbId, title, year].some(item => !item))
            Alert.alert('Please set title, IMDB ID and year of your new movie!');
        else
            props.updateMoviesList(new Movie(title!, imdbId!, type, year));
    };

    return (
        <View>
            <Text style={addMovieStyles.title}>
                Add movie
            </Text>

            <Text>
                Title
            </Text>
            <TextInput style={addMovieStyles.input} onChangeText={(text: string) => setTitle(text)}/>

            <Text>
                IMDB ID
            </Text>
            <TextInput style={addMovieStyles.input} onChangeText={(text: string) => setImdbId(text)}/>

            <Text>
                Type
            </Text>
            <TextInput style={addMovieStyles.input} onChangeText={(text: string) => setType(text)}/>

            <Text>
                Year
            </Text>
            <TextInput style={addMovieStyles.input} keyboardType={'numeric'} onChangeText={(text: string) => setYear(parseInt(text))}/>

            <Button title="Add Movie" onPress={handleAddMovie}/>
        </View>
    );
}
