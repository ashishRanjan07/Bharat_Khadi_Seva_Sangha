import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from '../../drawerNavigation/DrawerNavigation';
import Notification from '../../../screen/appScreen/Notification';
import EditProfile from '../../../screen/appScreen/EditProfile';

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
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
