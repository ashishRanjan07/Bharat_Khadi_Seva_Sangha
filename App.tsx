import {Image, StatusBar, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Splash from './src/screen/authScreen/Splash';
import NetInfo from '@react-native-community/netinfo';
import NoInternet from './src/utils/NoInternet';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  return <>{isConnected ? <Splash /> : <NoInternet />}</>;
};

export default App;

const styles = StyleSheet.create({});
