import {StyleSheet, View} from 'react-native';
import React from 'react';
import MarqueeText from 'react-native-marquee';
import {responsive} from '../utils/Responsive';
import {AppColor} from '../utils/AppColor';

const MarqueeeeText = ({text}) => {
  return (
    <View style={styles.main}>
      <MarqueeText
        style={styles.marqueeStyle}
        speed={1}
        consecutive={true}
        marqueeOnStart={true}
        loop={true}
        delay={0}>
        {text}
      </MarqueeText>
    </View>
  );
};

export default MarqueeeeText;

const styles = StyleSheet.create({
  main: {
    backgroundColor: AppColor.borderColor,
    padding: responsive(5),
  },
  marqueeStyle: {
    fontSize: responsive(20),
    color: AppColor.white,
    fontFamily: 'NotoSans-Bold',
  },
});
