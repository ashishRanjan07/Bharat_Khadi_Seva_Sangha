import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../../components/CustomHeader';
import {AppColor} from '../../../utils/AppColor';

const AllProducts = () => {
  return (
    <View style={styles.main}>
      <CustomHeader title={'All Products'} />
    </View>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
});
