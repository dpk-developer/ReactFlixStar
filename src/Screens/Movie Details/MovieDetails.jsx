import React, { Fragment, useState, useCallback } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, RefreshControl } from 'react-native';

import styles from './Styles';
import { AppHeader } from '../../Components';
import { ApiEndPoints, AppConstants, ImagePaths } from '../../Constants';

const MovieDetails = ({ route }) => {
    const { movieDetails } = route?.params;

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    }, []);

    return (
        <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <Fragment>
                <AppHeader title={AppConstants.MOVIE_DETAILS} showFavorite={false} headerStyle={styles.headerStyle} />

                <ImageBackground src={`${ApiEndPoints.IMAGE_URL}${movieDetails?.backdrop_path}`} style={styles.backgroundImg}>
                    <View style={styles.rowDirection}>
                        <Image source={ImagePaths.IC_RATING} style={styles.ratingIcon} resizeMode={AppConstants.CONTAIN} />
                        <Text style={styles.ratingNo}>{movieDetails?.vote_average?.toFixed(1)}</Text>
                    </View>
                </ImageBackground>

                <Image
                    src={`${ApiEndPoints.IMAGE_URL}${movieDetails?.poster_path}`}
                    resizeMode={AppConstants.CONTAIN}
                    style={styles.movieThumbnail}
                />

                <View>
                    <Text style={styles.movieTitle}>{movieDetails?.title}</Text>
                </View>

                <View style={styles.rowDirection2}>
                    <Image source={ImagePaths.IC_CALENDAR} style={styles.ratingIcon} resizeMode={AppConstants.CONTAIN} />
                    <Text style={styles.activeText}>{movieDetails?.release_date}</Text>
                </View>

                <View style={{ paddingHorizontal: 24 }}>
                    <Text style={styles.aboutText}>Overview</Text>
                    <Text style={styles.overView}>{movieDetails?.overview}</Text>
                </View>
            </Fragment>
        </ScrollView>
    );
};

export default MovieDetails;