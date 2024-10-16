import React from 'react';;
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Colors from '../Styles/Colors';
import { AppConstants } from '../Constants';
import ImagePaths from '../Constants/ImagePaths';

const AppHeader = ({ title, isFavorite, showFavorite, headerStyle }) => {
    const navigation = useNavigation();

    return (
        <View style={{ ...styles.container, ...headerStyle }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={ImagePaths.IC_BACK} style={styles.backButton} resizeMode={AppConstants.CONTAIN} />
            </TouchableOpacity>

            <Text style={styles.title}>{title}</Text>

            {!!showFavorite ? (
                <TouchableOpacity>
                    {isFavorite ? (
                        <Image source={ImagePaths.IC_ACTVE_FAV} style={styles.favIcon} resizeMode={AppConstants.CONTAIN} />
                    ) : (
                        <Image source={ImagePaths.IC_INACTIVE_FAV} style={styles.favIcon} resizeMode={AppConstants.CONTAIN} />
                    )}
                </TouchableOpacity>
            ) : (
                <View style={styles.activeFav} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        width: AppConstants.AUTO,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        color: Colors.lightWhite,
        fontFamily: AppConstants.FONTSTYLE.BOLD,
    },
    backButton: {
        width: 36,
        height: 36,
    },
    favIcon: {
        width: 28,
        height: 28,
        tintColor: Colors.white
    },
});

export default AppHeader;