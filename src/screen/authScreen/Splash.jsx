import React, {useEffect, useRef} from 'react';
import {Animated, StatusBar, StyleSheet, View} from 'react-native';
import {AppColor} from '../../utils/AppColor';
import {ImagePath} from '../../utils/ImagePath';

const Splash = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const positionAnim = useRef(new Animated.ValueXY({x: 0, y: -100})).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    Animated.spring(positionAnim, {
      toValue: {x: 0, y: 0},
      bounciness: 10,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={AppColor.white} barStyle={'dark-content'} />
      <Animated.View style={[styles.imageHolder, positionAnim.getLayout()]}>
        <Animated.Image
          source={ImagePath.logo}
          resizeMode="contain"
          style={[
            styles.imageStyle,
            {
              transform: [{scale: scaleAnim}],
            },
          ]}
        />
      </Animated.View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageHolder: {
    width: '95%',
  },
  imageStyle: {
    height: 500,
    width: '95%',
  },
});
