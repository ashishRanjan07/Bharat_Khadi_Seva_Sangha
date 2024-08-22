import {
    Alert,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {AppColor} from '../utils/AppColor';
import {responsive} from '../utils/Responsive';
import Octicons from 'react-native-vector-icons/Octicons';

const CustomCategoryModal = ({visible, onClose, onConfirm, message, data}) => {
  console.log(data?.mid_array, 'Line 9');

  const renderItem = ({item}) => {
    console.log(item, 'Line 19');
    return (
      <TouchableOpacity style={styles.itemHolder} onPress={()=>Alert.alert("Under Construction","Work Under Progress please wait...")}>
        <View style={{width: '30%'}}>
          <Image
            loadingIndicatorSource={{
              uri: 'https://khadi.atomax.in/wp-content/uploads/2024/01/Untitled-1-600-x-400-copy.jpg',
            }}
            source={{uri: item?.img[0]?.img}}
            resizeMode="cover"
            style={styles.imageStyle}
          />
        </View>
        <View style={{width: '50%'}}>
          <Text style={styles.text}>{item?.name}</Text>
        </View>
        <View style={{width: '20%', alignItems: 'center'}}>
          <Octicons
            name="arrow-right"
            size={responsive(30)}
            color={AppColor.black}
          />
        </View>
      </TouchableOpacity>
    );
  };

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
          <FlatList
            data={data?.mid_array}
            renderItem={renderItem}
            keyExtractor={item => item?.id}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomCategoryModal;

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
  messageText: {
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(20),
    color: AppColor.black,
    textAlign: 'center',
  },
  itemHolder: {
    borderWidth: 2,
    width: '98%',
    alignSelf: 'center',
    marginVertical: responsive(5),
    borderRadius: responsive(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: AppColor.white,
    elevation: responsive(5),
    backgroundColor: AppColor.white,
    justifyContent: 'space-between',
  },
  imageStyle: {
    height: responsive(100),
    width: responsive(100),
    borderRadius: responsive(10),
  },
  text: {
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
    fontSize: responsive(18),
  },
});
