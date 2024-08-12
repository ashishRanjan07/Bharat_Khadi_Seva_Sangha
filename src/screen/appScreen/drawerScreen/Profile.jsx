import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../../utils/AppColor'
import CustomHeader from '../../../components/CustomHeader'

const Profile = () => {
  return (
    <View style={styles.main}>
      <CustomHeader title={"Profile"}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:AppColor.white
  }
})