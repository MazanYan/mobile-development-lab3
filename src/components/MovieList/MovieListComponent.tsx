import React from 'react';
import movieData from '../../assets/MoviesList.json';
import { View, Text, FlatList } from 'react-native';
import { Movie } from '../../utils/Movie';
import { Avatar, ListItem } from "react-native-elements";

export default function MovieListComponent() {

    const movies: Movie[] = movieData.Search
        .map((movie: any) =>
            new Movie(movie.Title, movie.imdbID, movie.Type, movie.Year, movie.Poster)
        );

    return (
        <View>
            <FlatList data={movies} renderItem={({ item, index }) => (
                <ListItem key={index}>
                    <Avatar source={item.poster?.uri} />
                    <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                        <View style={{
                            flexDirection: 'row',
                            paddingLeft: 10,
                            paddingTop: 5
                        }}>
                            <Text style={{
                                paddingLeft: 10,
                                color: 'grey'
                            }}>
                                {item.imdbId}
                            </Text>
                        </View>
                    </ListItem.Content>
                </ListItem>
            )} />
        </View>
    );
}
