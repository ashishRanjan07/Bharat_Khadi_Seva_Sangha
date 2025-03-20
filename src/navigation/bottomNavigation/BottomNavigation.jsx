import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../../screen/appScreen/bottomScreen/Home';
import Category from '../../screen/appScreen/bottomScreen/Category';
import Search from '../../screen/appScreen/bottomScreen/Search';
import Setting from '../../screen/appScreen/bottomScreen/Setting';
import {AppColor} from '../../utils/AppColor';
import {responsive} from '../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createMaterialBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      activeColor={AppColor.primary}
      inactiveColor={AppColor.black}
      activeIndicatorStyle={styles.main}
      onTabLongPress={() => Alert.alert('Show ')}
      barStyle={styles.barStyle}
      keyboardHidesNavigationBar={true}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign
              name="home"
              size={responsive(24)}
              color={(color = AppColor.black)}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="category"
              size={responsive(24)}
              color={(color = AppColor.black)}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Ionicons
              name="search"
              size={responsive(24)}
              color={(color = AppColor.black)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="settings"
              size={responsive(24)}
              color={(color = AppColor.black)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  main: {
    backgroundColor: AppColor.white,
    width: responsive(40),
    height: responsive(40),
    borderRadius: responsive(10),
  },
  barStyle: {
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: AppColor.borderColor,
    borderTopWidth: 2,
    borderColor: AppColor.primary,
  },
});
