import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppColor} from '../utils/AppColor';
import {responsive} from '../utils/Responsive';

const CustomSearch = () => {
  return (
    <View style={styles.searchBoxHolder}>
      <View style={styles.searchBox}>
        <Ionicons name="search" color={AppColor.white} size={responsive(35)} />
      </View>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={AppColor.black}
        style={styles.textInputBox}
      />
    </View>
  );
};

export default CustomSearch;

const styles = StyleSheet.create({
  searchBoxHolder: {
    borderWidth: 2,
    marginVertical: responsive(10),
    width: '95%',
    alignSelf: 'center',
    borderRadius: responsive(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: AppColor.borderColor,
    gap: responsive(10),
    backgroundColor: AppColor.borderColor,
  },
  searchBox: {
    alignItems: 'center',
    width: '15%',
    padding: responsive(15),
  },
  textInputBox: {
    width: '80%',
    borderRadius: responsive(10),
    fontSize: responsive(18),
    color: AppColor.black,
    backgroundColor: AppColor.white,
    fontFamily: 'NotoSans-Medium',
    paddingHorizontal: responsive(10),
  },
});
