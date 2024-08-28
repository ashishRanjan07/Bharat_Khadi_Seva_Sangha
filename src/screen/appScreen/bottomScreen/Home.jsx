import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../../../utils/AppColor';
import CustomHeader from '../../../components/CustomHeader';
import MarqueeeeText from '../../../components/MarqueeeeText';
import HomeCategory from '../../../components/home/HomeCategory';
import Subscribe from '../../../components/home/Subscribe';
import Toast from 'react-native-toast-message';
import ImageSlider from '../../../components/ImageSlider';
import {app_banner, productCategory} from '../../../api/auth_api';
import MensApparel from '../../../components/home/MensApparel';
import BestSeller from '../../../components/BestSeller';

const Home = () => {
  const [data1, setData1] = useState([]);
  const [menId, setMenId] = useState('');
  const [womenId, setWomenId] = useState('');
  const [beautyProductsId, setBeautyProductsId] = useState('');
  const [accessoriesId, setAccessoriesId] = useState('');

  useEffect(() => {
    const fetchBanner = async position => {
      const data = {
        banner_tag: position,
      };
      const response = await app_banner(data);
      setData1(response?.data);
      console.log(response?.data, 'Line 24');
    };
    fetchBanner('top-banner');
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const response = await productCategory();
    console.log(response?.data, 'Line 32');
    setMenId(response?.data[0]?.id);
    setWomenId(response?.data[1]?.id);
    setBeautyProductsId(response?.data[2]?.id);
    setAccessoriesId(response?.data[3]?.id);
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.white} />
      <CustomHeader title={'Home'} />
      <MarqueeeeText
        text={'This Application is dealing in all types of fashion Fabrics.'}
      />
      <HomeCategory />
      <ScrollView style={styles.main}>
        <ImageSlider item={data1} />
        <MensApparel />
        {/* Best Seller for mens */}
        <BestSeller bannerFor={'Men'} id={menId} />
        <BestSeller bannerFor={'Women'} id={womenId} />
        <BestSeller bannerFor={'Beauty Products'} id={beautyProductsId} />
        <BestSeller bannerFor={'Accessories'} id={accessoriesId} />
        <Subscribe />
      </ScrollView>
      <Toast />
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
