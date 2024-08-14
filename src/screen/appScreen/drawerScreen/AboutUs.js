import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../components/CustomHeader';
import {AppColor} from '../../../utils/AppColor';
import {WebView} from 'react-native-webview';
import {BarIndicator} from 'react-native-indicators';

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.main}>
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.white} />
      <CustomHeader title={'About Us'} />
      {isLoading && (
        <View style={styles.loaderContainer}>
          <BarIndicator color={AppColor.primary} />
        </View>
      )}
      <WebView
        source={{
          uri: 'https://www.khadindia.com/about/',
        }}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        style={isLoading ? {display: 'none'} : {flex: 1}}
      />
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.white,
  },
});
