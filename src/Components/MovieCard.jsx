import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from '../Styles/Colors';
import { SharePosters } from '../Utils';
import { AppConstants, NavigationStrings, ImagePaths, ApiEndPoints } from '../Constants';

const MovieCard = ({ movie, cardStyle, onPressFavorite, index, showFavorite = true }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{ ...styles.container, ...cardStyle }} onPress={() => navigation.navigate(NavigationStrings.MOVIE_DETAILS_SCREEN, { movieDetails: movie })}>
            <Image
                style={styles.movieThumbnail}
                resizeMode={AppConstants.CONTAIN}
                src={`${ApiEndPoints.IMAGE_URL}${movie?.poster_path}`}
            />

            <View style={{ flex: 1 }}>
                <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.movieTitle}>{movie?.title}</Text>

                <View style={styles.rowDirection}>
                    <Image source={ImagePaths.IC_RATING} style={styles.ratingIcon} resizeMode={AppConstants.CONTAIN} />
                    <Text style={styles.ratingNo}>{movie?.vote_average?.toFixed(1)}</Text>
                </View>

                <View style={styles.rowDirection2}>
                    <Image source={ImagePaths.IC_CALENDAR} style={styles.ratingIcon} resizeMode={AppConstants.CONTAIN} />

                    <Text style={{ ...styles.activeText, ...{ marginStart: !showFavorite ? -60 : -8 } }}>{movie?.release_date}</Text>

                    {showFavorite ? (<TouchableOpacity onPress={() => onPressFavorite(index)}>
                        {movie?.isFavorite ? (
                            <Image source={ImagePaths.IC_ACTVE_FAV} style={styles.favIcon} resizeMode={AppConstants.CONTAIN} />
                        ) : (
                            <Image source={ImagePaths.IC_INACTIVE_FAV} style={styles.favIcon} resizeMode={AppConstants.CONTAIN} />
                        )}
                    </TouchableOpacity>) : null}

                    <TouchableOpacity style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }} onPress={() => SharePosters({ subject: `${movie?.title} - Movie`, message: movie?.title, url: `${ApiEndPoints.IMAGE_URL}${movie?.poster_path}` })}>
                        <Image source={ImagePaths.IC_SHARE} style={styles.shareIcon} resizeMode={AppConstants.CONTAIN} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingStart: 16,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.lightTheme,
    },
    movieThumbnail: {
        top: -20,
        width: 100,
        height: 126,
        marginEnd: 16,
        borderRadius: 16,
    },
    movieTitle: {
        fontSize: 24,
        color: Colors.white,
        fontFamily: AppConstants.FONTSTYLE.BOLD,
    },
    ratingIcon: {
        width: 16,
        height: 16,
        marginEnd: 8,
    },
    ratingNo: {
        fontSize: 12,
        color: Colors.orange,
        fontFamily: AppConstants.FONTSTYLE.BOLD,
    },
    rowDirection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activeText: {
        fontSize: 16,
        marginStart: -8,
        color: Colors.white,
        fontFamily: AppConstants.FONTSTYLE.BOLD,
    },
    shareIcon: {
        width: 20,
        height: 20,
        marginHorizontal: 8,
        tintColor: Colors.white,
    },
    favIcon: {
        width: 28,
        height: 28,
        marginHorizontal: 8,
        tintColor: Colors.white,
    },
    rowDirection2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});

export default MovieCard;