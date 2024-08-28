import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {responsive} from '../../utils/Responsive';
import {AppColor} from '../../utils/AppColor';
import {ImagePath} from '../../utils/ImagePath';

const MensApparel = () => {
  return (
    <View style={styles.main}>
      <View style={styles.contentHolder}>
        <View style={styles.textHolder}>
          <Text style={styles.text}>Men's Apparel</Text>
        </View>
        <ScrollView
          style={{backgroundColor: AppColor.white, height: '100%'}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.imageHolder}>
            <Image
              source={ImagePath.first}
              resizeMode="contain"
              style={styles.imageStyle}
            />
            <Image
              source={ImagePath.second}
              resizeMode="contain"
              style={styles.imageStyle}
            />
            <Image
              source={ImagePath.third}
              resizeMode="contain"
              style={styles.imageStyle}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MensApparel;

const styles = StyleSheet.create({
  main: {
    borderRadius: responsive(5),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: AppColor.white,
    // marginBottom: responsive(10),
    height: responsive(175),
    elevation: responsive(10),
  },
  contentHolder: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
    fontSize: responsive(20),
    textAlign: 'center',
  },
  textHolder: {
    width: '25%',
    alignItems: 'center',
  },
  imageStyle: {
    height: responsive(150),
    width: responsive(150),
    borderRadius: responsive(10),
  },
  imageHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive(10),
    padding: responsive(10),
  },
});
