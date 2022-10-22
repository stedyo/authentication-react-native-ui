import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {

  const onSignInFacebook = () => {
    console.warn('facebook');
  };

  const onSignInGoogle = () => {
    console.warn('google');
  };

  const onSignInApple = () => {
    console.warn('apple');
  };

  return (
    <>
      <CustomButton
          text="Sign in With Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7E4F4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign in With Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign in With Apple"
          onPress={onSignInApple}
          bgColor="#E3E3E3"
          fgColor="#363636"
        />
    </>
  );
};

export default SocialSignInButtons;