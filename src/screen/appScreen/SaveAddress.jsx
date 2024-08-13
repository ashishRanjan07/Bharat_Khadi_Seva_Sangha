import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SavedAddress from './SavedAddress';
import AddAddress from './AddAddress';
import ListHeader from '../../components/ListHeader';
import {responsive} from '../../utils/Responsive';
import {AppColor} from '../../utils/AppColor';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createMaterialTopTabNavigator();

const CustomTabBarItem = ({iconName, label}) => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Entypo name={iconName} size={responsive(30)} color={AppColor.success} />
    <Text
      style={{
        marginLeft: responsive(10),
        fontSize: responsive(18),
        fontFamily: 'NotoSans-Medium',
        color: AppColor.success,
      }}>
      {label}
    </Text>
  </View>
);

const SaveAddress = () => {
  return (
    <>
      <StatusBar backgroundColor={AppColor.white} barStyle={'dark-content'} />
      <ListHeader title={'Address'} />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIndicatorStyle: {
            borderBottomWidth: 2,
            borderColor: AppColor.success,
          },
          tabBarIconStyle: styles.tabBarIcon,
        }}>
        <Tab.Screen
          name="Saved Address"
          component={SavedAddress}
          options={{
            tabBarLabel: () => (
              <CustomTabBarItem iconName="location" label="Saved Address" />
            ),
          }}
        />
        <Tab.Screen
          name="Add Address"
          component={AddAddress}
          options={{
            tabBarLabel: () => (
              <CustomTabBarItem iconName="address" label="Add Address" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default SaveAddress;

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: responsive(18),
    fontFamily: 'NotoSans-Medium',
    color: AppColor.success,
    letterSpacing: responsive(1),
    lineHeight: responsive(25),
  },
  tabBarIcon: {
    backgroundColor: AppColor.borderColor,
    padding: responsive(5),
    height: responsive(40),
    width: responsive(40),
    alignItems: 'center',
    borderRadius: responsive(5),
  },
});
