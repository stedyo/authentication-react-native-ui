/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//import SignInScreen from './src/screens/SignInScreen';
//import SignUpScreen from './src/screens/SignUpScreen';
//import ConfirmationEmailScreen from './src/screens/ConfirmationEmailScreen';
//import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
     <ResetPasswordScreen />
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
