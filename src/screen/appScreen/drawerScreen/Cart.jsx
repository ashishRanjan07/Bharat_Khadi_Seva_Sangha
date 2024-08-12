import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../../components/CustomHeader'
import { AppColor } from '../../../utils/AppColor'

const Cart = () => {
  return (
    <View style={styles.main}>
    <CustomHeader title={"Cart"}/>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:AppColor.white
  }
})