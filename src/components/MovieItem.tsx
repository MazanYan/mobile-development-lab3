import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Movie } from '../utils/Movie';


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
    },
});

interface MovieItemProps {
    movie: {
        item: Movie,
        separators: Object
    },
    onPress: Function
}

export default function MovieItem(props: MovieItemProps) {
    
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
