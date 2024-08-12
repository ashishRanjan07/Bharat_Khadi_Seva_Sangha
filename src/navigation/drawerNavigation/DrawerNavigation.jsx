import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from '../bottomNavigation/BottomNavigation';
import Profile from '../../screen/appScreen/drawerScreen/Profile';
import AllProducts from '../../screen/appScreen/drawerScreen/AllProducts';
import MyOrder from '../../screen/appScreen/drawerScreen/MyOrder';
import Cart from '../../screen/appScreen/drawerScreen/Cart';
import AboutUs from '../../screen/appScreen/drawerScreen/AboutUs';
import CustomDrawer from './CustomDrawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {responsive} from '../../utils/Responsive';
import {AppColor} from '../../utils/AppColor';
import ContactUs from '../../screen/appScreen/drawerScreen/ContactUs';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="DashBoard"
        component={BottomNavigation}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="dashboard"
              size={responsive(30)}
              color={(color = AppColor.borderColor)}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <FontAwesome
              name="user"
              size={responsive(30)}
              color={(color = AppColor.borderColor)}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="All products"
        component={AllProducts}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="check-box"
              size={responsive(30)}
              color={(color = AppColor.borderColor)}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="My order"
        component={MyOrder}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Feather
              name="box"
              size={responsive(30)}
              color={(color = AppColor.borderColor)}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="shopping-cart"
              size={responsive(30)}
              color={(color = AppColor.borderColor)}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="About us"
        component={AboutUs}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="info"
              size={responsive(30)}
              color={(color = AppColor.borderColor)}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
      <Drawer.Screen
        name="Contact us"
        component={ContactUs}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="contactless"
              size={responsive(30)}
              color={(color = AppColor.borderColor)}
            />
          ),
          drawerLabelStyle: styles.labelStyle,
          drawerAllowFontScaling: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  labelStyle: {
    color: AppColor.primary,
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(18),
  },
});
