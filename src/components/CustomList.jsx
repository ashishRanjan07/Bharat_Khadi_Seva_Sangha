import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsive} from '../utils/Responsive';
import {AppColor} from '../utils/AppColor';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomList = ({text, iconName, Icon}) => {
  return (
    <TouchableOpacity style={styles.listHolder}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        <Icon
          name={iconName}
          size={responsive(40)}
          color={AppColor.borderColor}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
      <MaterialCommunityIcons
        name="arrow-right"
        size={responsive(40)}
        color={AppColor.borderColor}
      />
    </TouchableOpacity>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  listHolder: {
    borderWidth: 2,
    padding: responsive(10),
    width: '95%',
    alignSelf: 'center',
    borderRadius: responsive(5),
    borderColor: AppColor.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: responsive(20),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
  },
});
