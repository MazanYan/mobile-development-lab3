import React, { useEffect, useState } from 'react';
import movieData from '../assets/MoviesList.json';

import { View, FlatList, StyleSheet } from 'react-native';
import { Movie } from '../utils/Movie';
import { Button } from 'react-native-elements';
import SearchMovie from './SearchMovie';
import MovieItem from './MovieItem';

const movieStyles = StyleSheet.create({
    topMenu: {
        flexDirection: 'row'
    },
    search: {
        flex: 1
    },
    add: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10
    }
});

//@ts-ignore
export default function MovieListComponent({ navigation }) {

    const [movies, setMovies] = useState<Movie[]>();
    const [searchWord, setSearchWord] = useState<string>();

    const addMovie = (newMovie: Movie) => {
        movies?.push(newMovie);
        setMovies(movies);
    };

    useEffect(() => {
        setMovies(movieData.Search.map((movie: any) =>
                new Movie(movie.Title, movie.imdbID, movie.Type, movie.Year, movie.Poster))
            );
    }, []);

    return (
        <View>
            <View style={movieStyles.topMenu}>
                <View style={movieStyles.search}>
                    <SearchMovie changeSearchName={setSearchWord}/>
                </View>
                <Button style={movieStyles.add} title="+" onPress={() => navigation.navigate('AddMovie', { updateMoviesList: addMovie })}/>
            </View>
            <FlatList
                data={!searchWord ? movies : movies?.filter(movie => movie.title.toLowerCase().includes(searchWord.toLowerCase()))}
                renderItem={
                    (movie: Movie | any) => (
                        <MovieItem movie={movie} onPress={() => navigation.navigate('MovieDetail', { movie: movie.item })}/>
                    )}
                keyExtractor={(movie: Movie) => movie.imdbId}>
            </FlatList>
        </View>
    );
}
