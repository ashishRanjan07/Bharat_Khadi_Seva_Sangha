import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { responsive } from '../utils/Responsive'
import { AppColor } from '../utils/AppColor'

const LogoutAlert = ({ visible, title, message, onClose,onConfirm }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity style={styles.button} onPress={onConfirm}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default LogoutAlert

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertBox: {
      width: responsive(300),
      padding: responsive(20),
      backgroundColor: 'white',
      borderRadius: responsive(10),
      alignItems: 'center',
    },
    title: {
      fontSize: responsive(18),
      fontWeight: 'bold',
      marginBottom: responsive(10),
      color:AppColor.black
    },
    message: {
      color:AppColor.success,
      fontSize: responsive(16),
      marginBottom: responsive(20),
    },
    button: {
      width: '100%',
      padding: responsive(10),
      backgroundColor: AppColor.primary,
      borderRadius: responsive(5),
      alignItems: 'center',
      marginVertical:responsive(5)
    },
    buttonText: {
      color: AppColor.white,
      fontSize: responsive(18),
      fontFamily:'NotoSans-Medium'
    },
  });


