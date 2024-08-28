import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {responsive} from '../utils/Responsive';
import Swiper from 'react-native-swiper';
import {BarIndicator} from 'react-native-indicators';
import {AppColor} from '../utils/AppColor';

const ImageSlider = ({item}) => {
  //   console.log(item, 'Line 7');
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.main}>
      <Swiper
        autoplay={true}
        // autoplayTimeout={2}
        style={styles.swiper}
        showsPagination={false}>
        {item?.map((item, index) => (
          <Image
            key={index}
            source={{uri: item.img}}
            resizeMode="cover"
            style={styles.imageStyle}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onError={() => setLoading(false)}
          />
        ))}
      </Swiper>
      {loading && (
        <View style={styles.loaderView}>
          <View style={styles.loaderContainer}>
            <BarIndicator color={AppColor.primary} />
            <Text style={styles.loaderText}>Please wait...</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  main: {
    borderRadius: responsive(5),
    width: '95%',
    alignSelf: 'center',
    height: responsive(200),
    overflow: 'hidden',
    marginBottom: responsive(10),
  },
  swiper: {
    height: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: responsive(5),
  },
  loaderView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: responsive(10),
  },
  loaderContainer: {
    gap: responsive(30),
    // borderWidth: 2,
    width: '100%',
    alignSelf: 'center',
    padding: responsive(15),
    borderRadius: responsive(10),
    borderColor: AppColor.primary,
    backgroundColor: AppColor.white,
    paddingTop: responsive(30),
  },
  loaderText: {
    fontSize: responsive(18),
    color: AppColor.primary,
    textAlign: 'center',
  },
  loader: {
    position: 'absolute',
  },
});
