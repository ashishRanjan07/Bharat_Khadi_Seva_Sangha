import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../../utils/AppColor'
import CustomHeader from '../../../components/CustomHeader'

const Category = () => {
  return (
    <View style={styles.main}>
     <CustomHeader title={"Category"}/>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:AppColor.white
  }
})