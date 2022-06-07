import React, {useEffect} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import SignInScreen from './src/Screens/SignInScreen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
