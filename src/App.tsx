import React from 'react';
import MovieList from './components/MovieList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetail from './components/MovieDetail';
import AddMovie from './components/AddMovie';

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={MovieList}
            options={{ title: 'My Movies' }}
          />
          <Stack.Screen 
            name='MovieDetail' 
            component={MovieDetail}
            options={{ title: 'Movie Details' }}
          />
          <Stack.Screen 
            name='AddMovie' 
            component={AddMovie}
            options={{ title: 'Add Movie' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
