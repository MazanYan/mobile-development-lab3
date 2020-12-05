import React from 'react';
import movieData from '../../assets/MoviesList.json';

import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { Movie } from '../../utils/Movie';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0
    }
});

interface MovieItemProps {
    movie: {
        item: Movie,
        separators: Object
    }
}

const movieStyles = StyleSheet.create({
    poster: {
        width: 50,
        height: 50,
        marginRight: 17
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
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

function MovieItem(props: MovieItemProps) {
    
    return (
        <View style={movieStyles.item}>
            {
                !!props.movie.item.poster?.uri && 
                    <Image style={movieStyles.poster} resizeMethod='resize' source={props.movie.item.poster!.uri} />
            }
            <View style={movieStyles.description}>
                <Text style={movieStyles.title}>
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
        </View>
    )
}

export default function MovieListComponent() {

    const movies: Movie[] = movieData.Search
        .map((movie: any) =>
            new Movie(movie.Title, movie.imdbID, movie.Type, movie.Year, movie.Poster)
    );

    return (
        <View>
            <FlatList
                style={styles.container}
                data={movies}
                renderItem={
                    (movie: Movie | any) => (
                        <MovieItem movie={movie} />
                    )}
                keyExtractor={(movie: Movie) => movie.imdbId}>
            </FlatList>
        </View>
    );
}
