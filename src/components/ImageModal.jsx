import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import {responsive} from '../utils/Responsive';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ImageModal = ({isVisible, onClose, openCamera, openGallery}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Feather name="x" size={responsive(25)} color={AppColor.black} />
          </TouchableOpacity>
          <Text style={styles.modelText}>Upload Profile Picture</Text>
          <TouchableOpacity onPress={openGallery} style={styles.buttonHolder}>
            <MaterialIcons
              name="photo-library"
              size={responsive(25)}
              color={AppColor.white}
            />
            <Text style={styles.buttonText}>Open Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openCamera} style={styles.buttonHolder}>
            <MaterialIcons
              name="camera-alt"
              size={responsive(25)}
              color={AppColor.white}
            />
            <Text style={styles.buttonText}>Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.buttonHolder}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImageModal;

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
    gap: responsive(20),
    flex: 0.4,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  buttonHolder: {
    borderWidth: 2,
    width: '80%',
    alignItems: 'center',
    padding: responsive(10),
    alignSelf: 'center',
    borderRadius: responsive(10),
    borderColor: AppColor.primary,
    backgroundColor: AppColor.primary,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  buttonText: {
    color: AppColor.white,
    fontSize: responsive(18),
    fontFamily: 'NotoSans-Medium',
  },
  modelText: {
    color: AppColor.black,
    fontSize: responsive(22),
    fontFamily: 'NotoSans-Medium',
    textAlign:'center',
  },
});
