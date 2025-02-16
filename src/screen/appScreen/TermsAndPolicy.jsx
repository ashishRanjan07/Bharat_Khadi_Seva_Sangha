import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import { AppColor } from '../../utils/AppColor';
import ListHeader from '../../components/ListHeader';
import {WebView} from 'react-native-webview';
import {BarIndicator} from 'react-native-indicators';

const TermsAndPolicy = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View style={styles.main}>
     <SafeAreaView/>
      <ListHeader title={'Privacy Policy'} />
      {isLoading && (
        <View style={styles.loaderContainer}>
          <BarIndicator color={AppColor.primary} />
        </View>
      )}
      <WebView
        source={{
          uri: 'https://www.khadindia.com/privacy-policy/',
        }}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        style={isLoading ? {display: 'none'} : {flex: 1}}
      />
    </View>
  );
};

export default TermsAndPolicy;

const styles = StyleSheet.create({main: {
    flex: 1,
    backgroundColor: AppColor.primary,
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
