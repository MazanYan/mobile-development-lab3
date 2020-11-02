import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {CoordinateYM, Direction} from './helpers/CoordinateYM';

enum Color {
  blue, red
}

/*interface CoordProps {
  coord: CoordinateYM
}

function Coord(props: CoordProps) {

  return (
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={{color: '#0af', marginRight: 10}}>
          {props.coord.fullCoord()}
        </Text>
        <Text style={{color: '#d30'}}>
          {props.coord.decimalCoord()}
        </Text>
      </View>
    )
}*/

export default function App() {

  return (
    <View style={styles.container}>

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
