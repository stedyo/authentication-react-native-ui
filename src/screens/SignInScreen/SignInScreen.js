import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('sign in');
  };

  const onForgotPasswordPressed = () => {
    console.warn('esqueci essa caralha');
  };

  const onSignUpPressed = () => {
    console.warn('on sign up pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TRANSPARENT"
        />
        {/* SOCIAL MEDIA LOGIN */}
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create one."
          onPress={onSignUpPressed}
          type="TRANSPARENT"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 50,
  },
  logo: {
    //borderWidth: 2,
    //borderColor: 'thistle',
    //borderRadius: 50,
    width: '70%',
    maxWidth: 250,
    maxHeight: 250,
  },
});

export default SignInScreen;
