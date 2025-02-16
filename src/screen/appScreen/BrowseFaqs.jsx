import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {WebView} from 'react-native-webview';
import {BarIndicator} from 'react-native-indicators';
import { AppColor } from '../../utils/AppColor';
import ListHeader from '../../components/ListHeader';

const BrowseFaqs = () => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <View style={styles.main}>
         <SafeAreaView/>
            <ListHeader title={"Browser FAQs"}/>
          {isLoading && (
            <View style={styles.loaderContainer}>
              <BarIndicator color={AppColor.primary} />
            </View>
          )}
          <WebView
            source={{
              uri: 'https://www.khadindia.com/exchange-policy/',
            }}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            style={isLoading ? {display: 'none'} : {flex: 1}}
          />
        </View>
      );
}

export default BrowseFaqs

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
