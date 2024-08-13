import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {AppColor} from '../utils/AppColor';
import {responsive} from '../utils/Responsive';
import CustomButton from './CustomButton';
const CustomModal = ({visible, onClose, onConfirm, message}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Feather name="x" size={responsive(25)} color={AppColor.black} />
          </TouchableOpacity>
          <Text style={styles.messageText}>{message}</Text>
          <View style={styles.buttonHolder}>
            <CustomButton
              title={'Yes'}
              color={AppColor.primary}
              textColor={AppColor.white}
              handleAction={onConfirm}
            />
            <CustomButton
              title={'No'}
              color={AppColor.success}
              textColor={AppColor.white}
              handleAction={onClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: AppColor.white,
    padding: responsive(20),
    borderTopLeftRadius: responsive(20),
    borderTopRightRadius: responsive(20),
    gap: responsive(10),
    // flex: 0.6,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  textInputBox: {
    color: AppColor.primary,
    fontFamily: 'OpenSans-Medium',
    fontSize: responsive(20),
    borderWidth: 2,
    padding: responsive(10),
    borderRadius: responsive(5),
    borderColor: AppColor.primary,
  },
  text: {
    fontSize: responsive(20),
    color: AppColor.white,
    textAlign: 'center',
  },
  itemHolder: {
    borderWidth: 1,
    padding: responsive(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsive(5),
    borderRadius: responsive(5),
    borderColor: AppColor.primary,
    alignItems: 'center',
  },
  messageText: {
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(20),
    color: AppColor.primary,
    textAlign: 'center',
  },
});
