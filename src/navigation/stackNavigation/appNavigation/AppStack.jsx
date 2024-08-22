import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from '../../drawerNavigation/DrawerNavigation';
import Notification from '../../../screen/appScreen/Notification';
import EditProfile from '../../../screen/appScreen/EditProfile';
import BrowseFaqs from '../../../screen/appScreen/BrowseFaqs';
import TermsAndPolicy from '../../../screen/appScreen/TermsAndPolicy';
import SaveAddress from '../../../screen/appScreen/SaveAddress';
import EditAddress from '../../../screen/appScreen/EditAddress';
import SavedCard from '../../../screen/appScreen/SavedCard';
import ProductDetails from '../../../components/product/ProductDetails';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name='Notification'
      component={Notification}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Edit Profile'
      component={EditProfile}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='FAQs'
      component={BrowseFaqs}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Terms and Condition'
      component={TermsAndPolicy}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Address'
      component={SaveAddress}
      options={{headerShown:false}}
      />
       <Stack.Screen
      name='Edit Address'
      component={EditAddress}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Saved Card and Gift Card'
      component={SavedCard}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Product Details'
      component={ProductDetails}
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
