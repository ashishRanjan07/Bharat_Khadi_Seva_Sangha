import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../../utils/AppColor'
import CustomHeader from '../../../components/CustomHeader'

const MyOrder = () => {
  return (
    <View style={styles.main}>
    <CustomHeader title={"My Order"}/>
    </View>
  )
}

export default MyOrder

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:AppColor.white
  }
})