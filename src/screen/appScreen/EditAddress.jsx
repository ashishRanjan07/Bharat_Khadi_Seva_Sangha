import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../../utils/AppColor';
import ListHeader from '../../components/ListHeader';
import {responsive} from '../../utils/Responsive';
import UpdateFieldTextInput from '../../components/UpdateFieldTextInput';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const EditAddress = ({route}) => {
  const {item} = route.params;
  console.log(item, 'Line 6');
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [house, setHouse] = useState('');
  const [roadName, setRoadName] = useState('');
  

 

  const saveAddress = () => {
    
    console.log('Save Address Clicked');
  };
  return (
    <ScrollView style={styles.main}>
      <ListHeader title={'Edit Address'} />
      <Text style={styles.headerText}>Edit your saved Address</Text>
      <UpdateFieldTextInput
        placeholder={item.Name}
        keyboardType={'default'}
        title={'Name'}
        value={name}
        onChange={text => setName(text)}
      />
     
      <UpdateFieldTextInput
        placeholder={item.PhoneNo}
        keyboardType={'number-pad'}
        title={'Mob. No'}
        onChange={text => setPhoneNo(text)}
        value={phoneNo}
        maxLength={10}
      />
     
      <UpdateFieldTextInput
        placeholder={item?.Pincode}
        keyboardType={'number-pad'}
        title={'Pincode '}
        value={pinCode}
        onChange={text => setPinCode(text)}
        maxLength={6}
      />
      
      <UpdateFieldTextInput
        placeholder={item?.State}
        title={'State '}
        value={stateName}
        onChangeText={text => setStateName(text)}
        keyboardType={'default'}
      />
     
      <UpdateFieldTextInput
        placeholder={item?.City}
        title={'City '}
        value={city}
        onChange={text => setCity(text)}
        keyboardType={'default'}
      />
      
      <UpdateFieldTextInput
        title={'House '}
        placeholder={item?.HouseNo}
        value={house}
        onChangeText={text => setHouse(text)}
        keyboardType={'default'}
      />
     
      <UpdateFieldTextInput
      placeholder={item?.RoadName}
        title={'Road '}
        value={roadName}
        onChange={text => setRoadName(text)}
        keyboardType={'default'}
      />
      
      <View style={styles.buttonHolder}>
        <CustomButton
          title={'Save Address'}
          color={AppColor.primary}
          handleAction={saveAddress}
          textColor={AppColor.white}
        />
      </View>
    </ScrollView>
  );
};

export default EditAddress;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  headerText: {
    fontSize: responsive(20),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
    marginVertical: responsive(20),
  },
  buttonHolder: {
    width: '90%',
    alignSelf: 'center',
  },
});
