import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './Styles';
import { AppConstants } from '../../Constants';
import { getStorage } from '../../Helpers/Storage';
import { AppHeader, MovieCard } from '../../Components';

const FavoriteMovies = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getStorage(AppConstants.FAVORITE_MOVIES)
            .then((response) => {
                if (response) {
                    const data = JSON.parse(response);
                    setDataSource([...data]);
                }
            }).catch(console.error);
    }, []);


    const renderItem = useCallback(({ item }) => <MovieCard cardStyle={styles.cardStyle} movie={item} showFavorite={false} />, [dataSource]);

    const keyExtractor = useCallback((item) => item?.id?.toString(), []);

    if (!dataSource.length) {
        return (
            <View style={styles.container}>
                <AppHeader title={AppConstants.FAVORITE_MOVIES} showFavorite={false} headerStyle={styles.headerStyle} />

                <Text style={styles.notFoundText}>No Favorite Movies Found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <AppHeader title={AppConstants.FAVORITE_MOVIES} showFavorite={false} headerStyle={styles.headerStyle} />

            <FlatList
                data={dataSource}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    );
};

export default FavoriteMovies;