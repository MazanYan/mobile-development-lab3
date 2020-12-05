import React from 'react';
import { StyleSheet, View } from 'react-native';
import MovieList from "./components/MovieList/MovieListComponent";

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

export default function App() {

  return (
    <View style={styles.container}>
        <MovieList />
    </View>
  );
}
