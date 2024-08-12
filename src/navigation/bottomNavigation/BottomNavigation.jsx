import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../../screen/appScreen/Home';


const Tab = createMaterialBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
    </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})