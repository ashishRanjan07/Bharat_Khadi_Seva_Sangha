import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../../utils/AppColor'
import CustomHeader from '../../../components/CustomHeader'

const ContactUs = () => {
  return (
    <View style={styles.main}>
    <CustomHeader title={"Contact Us"}/>
    </View>
  )
}

export default ContactUs

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:AppColor.white
  }
})