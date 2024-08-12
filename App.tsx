import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Splash from './src/screen/authScreen/Splash';
import NetInfo from '@react-native-community/netinfo';
import NoInternet from './src/utils/NoInternet';
import Registration from './src/screen/authScreen/Registration';
import Toast from 'react-native-toast-message';
import Login from './src/screen/authScreen/Login';
import ForgetPassword from './src/screen/authScreen/ForgetPassword';
import AuthNavigation from './src/navigation/stackNavigation/authNavigation/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Toast />
      {isConnected ? (
        <NavigationContainer>
          <AuthNavigation />
        </NavigationContainer>
      ) : (
        <NoInternet />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
