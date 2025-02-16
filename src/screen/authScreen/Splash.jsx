import React, {useEffect, useRef} from 'react';
import {Animated, SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {AppColor} from '../../utils/AppColor';
import {ImagePath} from '../../utils/ImagePath';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';

const Splash = () => {
  const navigation = useNavigation();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const positionAnim = useRef(new Animated.ValueXY({x: 0, y: -100})).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.spring(positionAnim, {
      toValue: {x: 0, y: 0},
      bounciness: 10,
      useNativeDriver: false,
    }).start();
  }, []);

  const handleLoginClick = () => {
    navigation.navigate('Login');
  };
  const handleRegistrationClick = () => {
    navigation.navigate('Registration');
  };
  return (
    <View style={styles.main}>
     <SafeAreaView/>
      <StatusBar backgroundColor={AppColor.white} barStyle={'dark-content'} />
      <Animated.View style={[styles.imageHolder, positionAnim.getLayout()]}>
        <Animated.Image
          source={ImagePath.logo}
          resizeMode="contain"
          style={[
            styles.imageStyle,
            {
              transform: [{scale: scaleAnim}],
            },
          ]}
        />
      </Animated.View>
      <View style={{width: '90%'}}>
        <CustomButton
          title={'Login'}
          color={AppColor.primary}
          handleAction={handleLoginClick}
          textColor={AppColor.white}
        />
        <CustomButton
          title={'Registration'}
          color={AppColor.primary}
          handleAction={handleRegistrationClick}
          textColor={AppColor.white}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHolder: {
    width: '95%',
  },
  imageStyle: {
    height: 250,
    width: '95%',
  },
});
