import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../../utils/AppColor';
import CustomHeader from '../../../components/CustomHeader';

const Setting = () => {
  return (
    <View style={styles.main}>
      <CustomHeader title={' User Setting'} />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
});
