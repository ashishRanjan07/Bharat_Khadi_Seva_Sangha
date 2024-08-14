import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../../utils/AppColor';
import CustomHeader from '../../../components/CustomHeader';
import {WebView} from 'react-native-webview';
import {BarIndicator} from 'react-native-indicators';

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={AppColor.white} barStyle={'dark-content'} />
      <CustomHeader title={'Contact Us'} />
      {isLoading && (
        <View style={styles.loaderContainer}>
          <BarIndicator color={AppColor.primary} />
        </View>
      )}
      <WebView
        source={{
          uri: 'https://www.khadindia.com/contact/',
        }}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        style={isLoading ? {display: 'none'} : {flex: 1}}
      />
    </View>
  );
};

export default ContactUs;

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
