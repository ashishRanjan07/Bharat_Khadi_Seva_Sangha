import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {ImagePath} from './ImagePath';
import {responsive} from './Responsive';
import {AppColor} from './AppColor';
import CustomButton from '../components/CustomButton';

const NoInternet = () => {
  const handleOpenSetting = async () => {
    console.log('Open Settings');
    await Linking.openSettings();
  };
  return (
    <View style={styles.contentHolder}>
    <SafeAreaView/>
      <StatusBar backgroundColor={AppColor.white} barStyle={'dark-content'} />
      <Image
        source={ImagePath.noInternet}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <Text style={styles.text}>
        Please check your internet connection again or connect to wifi
      </Text>
      <View style={styles.buttonHolder}>
        <CustomButton
          title={'Open Setting'}
          color={AppColor.primary}
          handleAction={handleOpenSetting}
          textColor={AppColor.white}
        />
      </View>
    </View>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  contentHolder: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: AppColor.white,
    justifyContent: 'center',
  },
  imageStyle: {
    height: responsive(350),
    width: responsive(350),
  },
  text: {
    width: '85%',
    textAlign: 'center',
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(18),
    color: AppColor.primary,
    letterSpacing:responsive(1)
  },
  buttonHolder: {
    marginVertical: responsive(20),
    width: '90%',
  },
});
