/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onHomePressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home.</Text>
      <CustomButton text="Sign in" onPress={onHomePressed} />
    </View>
  );
};

export default HomeScreen;
