import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { Movie } from '../utils/Movie';

interface MovieDetailProps {
    movie: Movie
}

const win = Dimensions.get('window');

const detailStyles = StyleSheet.create({
    title: {
        lineHeight: 34,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    poster: {
        resizeMode: 'contain',
        width: win.width * 0.95,
        height: win.height - 200,
        paddingTop: 0,
        marginTop: 0,
        alignSelf: 'stretch',
        marginHorizontal: 'auto'
    },
    details: {
        marginTop: 17,
        paddingTop: 17,
        marginHorizontal: 17,
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    }
});

export default function MovieDetail(props: any) {

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        setMovie(props.route.params.movie);
    }, []);

    return (
        <View>
            <Text style={detailStyles.title}>
                {movie?.title}
            </Text>
            {
                movie?.poster && 
                    <Image style={detailStyles.poster} source={movie.poster.uri} />
            }
            <View style={detailStyles.details}>
                <Text>
                    type: {movie?.movType}
                </Text>
                <Text>
                    year: {movie?.year}
                </Text>
                <Text>
                    IMDB ID: {movie?.imdbId}
                </Text>
            </View>
        </View>
    );
}
