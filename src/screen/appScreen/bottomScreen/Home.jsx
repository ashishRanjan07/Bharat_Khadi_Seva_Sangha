import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../../utils/AppColor';
import CustomHeader from '../../../components/CustomHeader';
import MarqueeeeText from '../../../components/MarqueeeeText';
import HomeCategory from '../../../components/home/HomeCategory';
import Subscribe from '../../../components/home/Subscribe';
import Toast from 'react-native-toast-message';

const Home = () => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle={"dark-content"} backgroundColor={AppColor.white}/>
      <CustomHeader title={'Home'} />
      <MarqueeeeText text={"This Application is dealing in all types of fashion Fabrics."}/>
      <HomeCategory/>
      <Subscribe/>
      <Toast/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
});
