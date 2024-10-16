import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';

import Colors from '../Styles/Colors';
import { AppConstants, ImagePaths } from '../Constants';

const SearchBox = ({ onSearch }) => {
    return (
        <View style={styles.container}>
            <TextInput
                onChange={onSearch}
                style={styles.searchInput}
                placeholder={AppConstants.SEARCH}
                placeholderTextColor={Colors.searchText}
            />
            <TouchableOpacity>
                <Image source={ImagePaths.IC_SEARCH} style={styles.searchIcon} resizeMode={AppConstants.CONTAIN} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        marginVertical: 24,
        paddingHorizontal: 24,
        alignItems: 'center',
        flexDirection: 'row',
        width: AppConstants.AUTO,
        justifyContent: 'space-between',
        backgroundColor: Colors.lightTheme,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: Colors.white,
        fontFamily: AppConstants.FONTSTYLE.REGULAR,
    },
    searchIcon: {
        width: 16,
        height: 16,
        marginStart: 16,
    },
});

export default SearchBox;