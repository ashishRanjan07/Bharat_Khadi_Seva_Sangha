import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {responsive} from '../utils/Responsive';
import {AppColor} from '../utils/AppColor';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const CustomHeader = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.iconHolder}
        onPress={() => navigation.openDrawer()}>
        <MaterialIcons
          name="menu"
          color={AppColor.black}
          size={responsive(40)}
        />
      </TouchableOpacity>
      <View style={{width: '70%'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.iconHolder}
        onPress={() => navigation.navigate('Notification')}>
        <MaterialIcons
          name="notifications"
          color={AppColor.black}
          size={responsive(40)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main: {
    backgroundColor: AppColor.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: AppColor.black,
    fontSize: responsive(20),
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
  },
  iconHolder: {
    width: '15%',
    padding: responsive(10),
    alignItems: 'center',
  },
});
