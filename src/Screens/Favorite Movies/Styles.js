import { StyleSheet } from 'react-native';

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
    cardStyle: {
        marginTop: 28,
        marginHorizontal: 24,
    },
    notFoundText: {
        fontSize: 24,
        color: Colors.white,
        textAlign: 'center',
        fontFamily: AppConstants.FONTSTYLE.BOLD
    },
});

export default styles;