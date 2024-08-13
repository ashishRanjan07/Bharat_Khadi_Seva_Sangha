import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../utils/AppColor';
import Data from '../../assets/json/Address.json';
import {responsive} from '../../utils/Responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import CustomBottomModel from '../../components/CustomBottomModel';
import CustomModal from '../../components/CustomModal';
const SavedAddress = () => {
  const navigation = useNavigation();
  const [showOptions, setShowOptions] = useState(false);
  const [showDeleteAddress, setShowDeleteAddress] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  const handleShowOption = item => {
    setSelectedId(item.PhoneNo);
    setShowOptions(true);
  };

  const handleCloseDeleteModal  = () => {
    setShowOptions(!showOptions)
    setShowDeleteAddress(!showDeleteAddress)
  }

  const handleEditAddress = (item) => {
    // console.log(item,"Line 29")
    navigation.navigate('Edit Address',{item:item});
    setShowOptions(!showOptions)
  }
  const renderItem = ({item}) => {
    return (
      <View style={styles.renderView}>
        <View style={styles.nameHolder}>
          <Text style={styles.nameText}>{item.Name}</Text>
          <TouchableOpacity onPress={() => handleShowOption(item)}>
            <Entypo
              name="dots-three-vertical"
              size={responsive(25)}
              color={AppColor.primary}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.descriptionText}>
          {item.HouseNo} {''} {item.RoadName}
        </Text>
        <Text style={styles.descriptionText}>
          {item.City} {''} {item.State} {item.Pincode}
        </Text>
        <Text style={styles.descriptionText}>
          {item.PhoneNo} {''} {item.TypeOfAddress}
        </Text>
        {showOptions && item.PhoneNo == selectedId && (
          <View style={styles.optionView}>
            <TouchableOpacity style={styles.optionHolder} onPress={()=> handleEditAddress(item)}>
              <AntDesign
                name="edit"
                color={AppColor.black}
                size={responsive(30)}
              />
              <Text style={styles.nameText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionHolder}
              onPress={() => setShowDeleteAddress(!showDeleteAddress)}>
              <AntDesign
                name="delete"
                color={AppColor.black}
                size={responsive(30)}
              />
              <Text style={styles.nameText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
        <CustomModal
        onClose={handleCloseDeleteModal}
        visible={showDeleteAddress}
        onConfirm={handleCloseDeleteModal}
        message={"Are you sure want to delete the Address?"}
        />
    </View>
  );
};

export default SavedAddress;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  renderView: {
    gap: 10,
    borderWidth: 2,
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsive(10),
    padding: responsive(10),
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    borderColor: AppColor.white,
  },
  nameHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
  },
  descriptionText: {
    fontSize: responsive(16),
    color: AppColor.black,
    fontFamily: 'NotoSans-Regular',
  },
  optionHolder: {
    width: '100%',
    flexDirection: 'row',
    gap: responsive(15),
    alignItems: 'center',
    padding: responsive(10),
    borderBottomWidth: 2,
  },
  optionView: {
    width: responsive(150),
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 40,
    backgroundColor: AppColor.white,
    borderRadius: responsive(5),
    elevation: responsive(10),
    //
  },
});
