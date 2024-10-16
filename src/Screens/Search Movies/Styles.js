import { StyleSheet } from 'react-native';

import Colors from '../../Styles/Colors';
import { AppConstants } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: Colors.theme,
    },
    headingTitle: {
        fontSize: 18,
        color: Colors.white,
        fontFamily: AppConstants.FONTSTYLE.BOLD,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    favIcon: {
        width: 28,
        height: 28,
        tintColor: Colors.white
    },
    cardStyle: {
        marginTop: 28,
    },
    notFoundText: {
        fontSize: 24,
        color: Colors.white,
        textAlign: 'center',
        fontFamily: AppConstants.FONTSTYLE.BOLD
    },
});

export default styles;