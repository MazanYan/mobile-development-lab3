import React from 'react';
import movieData from '../assets/MoviesList.json';

import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Movie } from '../utils/Movie';
import { ListItem } from 'react-native-elements';

const movieStyles = StyleSheet.create({
    poster: {
        width: 50,
        height: 50,
        marginRight: 17
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    description: {
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        flex: 2
    },
    details: {
        flexDirection: 'row'
    },
    detail: {
        paddingRight: 17,
        color: '#888'
    }
});

interface MovieItemProps {
    movie: {
        item: Movie,
        separators: Object
    },
    onPress: Function
}

function MovieItem(props: MovieItemProps) {
    
    return (
        <ListItem style={movieStyles.item} onPress={() => props.onPress()}>
            {
                !!props.movie.item.poster?.uri && 
                    <Image style={movieStyles.poster} resizeMethod='resize' source={props.movie.item.poster!.uri} />
            }
            <View style={movieStyles.description}>
                <Text style={movieStyles.title} >
                    {props.movie.item.title}
                </Text>
                <View style={movieStyles.details}>
                    <Text style={movieStyles.detail}>
                        {props.movie.item.imdbId}
                    </Text>
                    <Text style={movieStyles.detail}>
                        {props.movie.item.movType}
                    </Text>
                    <Text style={movieStyles.detail}>
                        {props.movie.item.year}
                    </Text>
                </View>
            </View>
        </ListItem>
    )
}

//@ts-ignore
export default function MovieListComponent({ navigation }) {

    const movies: Movie[] = movieData.Search
        .map((movie: any) =>
            new Movie(movie.Title, movie.imdbID, movie.Type, movie.Year, movie.Poster)
    );

    return (
        <View>
            <FlatList
                data={movies}
                renderItem={
                    (movie: Movie | any) => (
                        <MovieItem movie={movie} onPress={() => navigation.navigate('MovieDetail', { movie: movie.item })}/>
                    )}
                keyExtractor={(movie: Movie) => movie.imdbId}>
            </FlatList>
        </View>
    );
}
