import { Dimensions, StyleSheet } from 'react-native';

import Colors from '../../Styles/Colors';
import { AppConstants } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.theme,
    },
    headerStyle: {
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    ratingIcon: {
        width: 16,
        height: 16,
        marginEnd: 12,
    },
    ratingNo: {
        fontSize: 12,
        marginTop: 4,
        color: Colors.orange,
        fontFamily: AppConstants.FONTSTYLE.BOLD,
    },
    backgroundImg: {
        height: 250,
    },
    rowDirection: {
        right: 10,
        width: 60,
        bottom: 10,
        height: 30,
        borderRadius: 8,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.lightTheme
    },
    movieContainer: {
        top: -126 / 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    movieThumbnail: {
        width: 100,
        height: 126,
        top: -126 / 2,
        marginEnd: 16,
        marginStart: 24,
        borderRadius: 16,
    },
    movieTitle: {
        top: -120,
        width: 200,
        fontSize: 18,
        color: Colors.white,
        alignSelf: 'center',
        position: 'absolute',
        fontFamily: AppConstants.FONTSTYLE.BOLD,
        left: Dimensions.get('screen').width / 3,
    },
    rowDirection2: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: -50,
    },
    aboutText: {
        fontSize: 16,
        marginTop: 12,
        color: Colors.white,
        fontFamily: AppConstants.FONTSTYLE.REGULAR,
    },
    overView: {
        fontSize: 12,
        marginTop: 12,
        color: Colors.white,
        fontFamily: AppConstants.FONTSTYLE.REGULAR,
    },
    activeText: {
        fontSize: 16,
        color: Colors.white,
        fontFamily: AppConstants.FONTSTYLE.BOLD,
    },
});

export default styles;