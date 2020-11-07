import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movie from './components/Movie/MovieComponent';
import MovieList from "./components/MovieList/MovieListComponent";

export default function App() {

  return (
    <View style={styles.container}>
        <MovieList />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 20
    }
});
