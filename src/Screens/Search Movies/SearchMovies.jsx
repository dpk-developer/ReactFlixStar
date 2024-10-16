import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import styles from './Styles';
import { SearchBox, MovieCard } from '../../Components';
import { getStorage, storeStorage } from '../../Helpers/Storage';
import { ActionTypes, AppConstants, ImagePaths, NavigationStrings } from '../../Constants';

const SearchMovies = ({ navigation }) => {
    const dispatch = useDispatch();

    const [pageNo, setPageNo] = useState(1);
    const [dataSource, setDataSource] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

    const { moviesList, searchMoviesList, totalPages } = useSelector((state) => ({
        moviesList: state?.moviesReducer?.moviesList,
        totalPages: state?.moviesReducer?.totalPages,
        searchMoviesList: state?.moviesReducer?.searchMoviesList,
    }), shallowEqual);

    useEffect(() => {
        console.log(pageNo <= totalPages)
        if (!moviesList?.length)
            dispatch({ type: ActionTypes.FETCH_MOVIES, pageNo });

        if (moviesList?.length) {
            handleDataSet();
        }
    }, [moviesList]);

    const handleDataSet = () => {
        getStorage(AppConstants.FAVORITE_MOVIES)
            .then((response) => {
                if (response) {
                    const data = JSON.parse(response);

                    moviesList?.map((item) => {
                        data?.map(localData => {
                            if (item?.id === localData?.id) {
                                item.isFavorite = true;
                            }
                        });
                    });
                }
            }).catch(console.error);

        setDataSource([...dataSource, ...moviesList]);
    };

    const onPressFavorite = async (index) => {
        dataSource[index].isFavorite = !dataSource[index]?.isFavorite;
        setDataSource([...dataSource]);

        try {
            const response = await getStorage(AppConstants.FAVORITE_MOVIES);
            const favorites = response ? JSON.parse(response) : [];

            const itemIndex = favorites.findIndex(item => item.id === dataSource[index].id);

            if (itemIndex !== -1) {
                favorites.splice(itemIndex, 1);
            } else {
                favorites.push(dataSource[index]);
            }

            await storeStorage(AppConstants.FAVORITE_MOVIES, JSON.stringify(favorites));
        } catch (error) {
            console.error(error);
        }
    };

    const renderItem = useCallback(({ item, index }) => {
        return (<MovieCard cardStyle={styles.cardStyle} movie={item} onPressFavorite={onPressFavorite} index={index} />);
    }, [dataSource, searchList]);

    const keyExtractor = useCallback((item) => item?.id?.toString(), []);

    const onEndReached = () => {
        setShowLoader(!showLoader);

        setPageNo(pageNo + 1);

        if (pageNo <= totalPages)
            dispatch({ type: ActionTypes.FETCH_MOVIES, pageNo });
        setTimeout(() => setShowLoader(!showLoader), 2000);
    };

    const listFooterComponent = () => (
        <ActivityIndicator size={'large'} style={{ marginVertical: 16, color: 'white' }} />
    );

    const onSearch = ({ nativeEvent }) => {
        setShowLoader(!showLoader);
        const searchText = nativeEvent?.text?.toLowerCase();

        if (searchText?.length > 2) {
            dispatch({ type: ActionTypes.FETCH_SEARCH_MOVIES, pageNo, query: searchText });
            setSearchList(searchMoviesList);
        } else {
            setSearchList([]);
        }

        setShowLoader(!showLoader);
    };

    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <Text style={styles.headingTitle}>{AppConstants.HEADING_TITLE}</Text>

                <TouchableOpacity onPress={() => navigation.navigate(NavigationStrings.FAVORITE_MOVIES_SCREEN)}>
                    <Image source={ImagePaths.IC_INACTIVE_FAV} style={styles.favIcon} resizeMode={AppConstants.CONTAIN} />
                </TouchableOpacity>
            </View>

            <SearchBox onSearch={onSearch} />

            <FlatList
                data={searchList.length ? searchList : dataSource}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                onEndReached={onEndReached}
                ListFooterComponent={showLoader && listFooterComponent}
            />
        </View>
    );
};

export default SearchMovies;