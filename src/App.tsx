import React from 'react';
import MovieList from './components/MovieList';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetail from './components/MovieDetail';
import AddMovie from './components/AddMovie';
import UploadImage from './components/UploadImage';
import MyPlot from './components/MyPlot';

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MovieList'
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
          <Stack.Screen 
            name='UploadImage' 
            component={UploadImage}
            options={{ title: 'Upload Image' }}
          />
          <Stack.Screen 
            name='Plot' 
            component={MyPlot}
            options={{ title: 'Plot' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
