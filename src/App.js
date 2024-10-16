import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import MainStack from './Routes';
import store from './Redux/Store';
import Colors from './Styles/Colors';

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={Colors.theme} barStyle={'light-content'} />
                <MainStack />
            </SafeAreaView>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.theme,
    },
});

export default App;