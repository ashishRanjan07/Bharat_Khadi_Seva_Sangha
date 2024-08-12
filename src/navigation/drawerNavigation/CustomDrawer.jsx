import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColor} from '../../utils/AppColor';
import {ImagePath} from '../../utils/ImagePath';
import {responsive} from '../../utils/Responsive';
import {DrawerItemList} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomDrawer = props => {
  return (
    <View style={styles.drawerContent}>
      <View style={styles.imageHolder}>
        <Image
          source={ImagePath.user}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </View>
      {/* Name Details Holder */}
      <View style={styles.detailsHolder}>
        <Text style={styles.text}>Name: Ashish Ranjan</Text>
        <Text style={styles.text}>aviashishranjan@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.socialMediaHolder}>
        <MaterialCommunityIcons
          name="whatsapp"
          size={responsive(40)}
          color={AppColor.C4}
        />
        <MaterialCommunityIcons
          name="linkedin"
          size={responsive(40)}
          color={AppColor.C4}
        />
        <MaterialCommunityIcons
          name="facebook"
          size={responsive(40)}
          color={AppColor.C4}
        />
        <MaterialCommunityIcons
          name="instagram"
          size={responsive(40)}
          color={AppColor.C4}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  imageHolder: {
    width: responsive(150),
    height: responsive(150),
    alignSelf: 'center',
    borderWidth: 3,
    marginVertical: responsive(10),
    borderRadius: responsive(60),
    overflow: 'hidden',
    borderColor: AppColor.borderColor,
  },
  imageStyle: {
    width: responsive(150),
    height: responsive(150),
    alignSelf: 'center',
    backgroundColor: AppColor.borderColor,
  },
  detailsHolder: {
    borderBottomWidth: 2,
    padding: responsive(10),
    borderBottomColor: AppColor.borderColor,
    marginBottom: responsive(10),
  },
  text: {
    fontSize: responsive(18),
    color: AppColor.borderColor,
    fontFamily: 'NotoSans-Medium',
  },
  socialMediaHolder: {
    position: 'absolute',
    padding: responsive(10),
    gap: responsive(10),
    alignItems: 'center',
    bottom: 0,
    width: '100%',
    backgroundColor: AppColor.primary,
    elevation: responsive(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
