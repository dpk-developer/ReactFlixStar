import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationStrings } from '../Constants';
import { SearchMovies, FavoriteMovies, MovieDetails } from '../Screens';

const Stack = createNativeStackNavigator();

const MainStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={NavigationStrings.DASHBOARD_SEARCH_MOVIES_SCREEN} screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
            <Stack.Screen name={NavigationStrings.MOVIE_DETAILS_SCREEN} component={MovieDetails} />
            <Stack.Screen name={NavigationStrings.FAVORITE_MOVIES_SCREEN} component={FavoriteMovies} />
            <Stack.Screen name={NavigationStrings.DASHBOARD_SEARCH_MOVIES_SCREEN} component={SearchMovies} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default MainStack;