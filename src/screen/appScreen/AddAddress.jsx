import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../../utils/AppColor';
import CustomTextInput from '../../components/CustomTextInput';
import {responsive} from '../../utils/Responsive';
import CustomButton from '../../components/CustomButton';

const AddAddress = () => {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [house, setHouse] = useState('');
  const [roadName, setRoadName] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [pinCodeError, setPinCodeError] = useState('');
  const [stateError, setStateError] = useState('');
  const [cityError, setCityError] = useState('');
  const [houseError, setHouseError] = useState('');
  const [roadError, setRoadError] = useState('');

  useEffect(() => {
    if (name.length > 0) {
      setNameError('');
    }
    if (phoneNo.length > 0) {
      setPhoneError('');
    }
    if (pinCode.length > 0) {
      setPinCodeError('');
    }
    if (stateName.length > 0) {
      setStateError('');
    }
    if (city.length > 0) {
      setCityError('');
    }
    if (house.length > 0) {
      setHouseError('');
    }
    if (roadName.length > 0) {
      setRoadError('');
    }
  }, [name, phoneNo, pinCode, stateName, city, house, roadName]);

  const saveAddress = () => {
    if (name.trim() === '') {
        setNameError('Enter Name');
        return;
      }
      if (phoneNo.trim() === '') {
        setPhoneError('Enter Phone No');
        return;
      }
      if (pinCode.trim() === '') {
        setPinCodeError('Enter pinCode');
        return;
      }
      if (stateName.trim() === '') {
        setStateError('Enter State Name');
        return;
      }
      if (city.trim() === '') {
        setCityError('Enter City Name');
        return;
      }
      if (house.trim() === '') {
        setHouseError('Enter House No and Other Details');
        return;
      }
      if (roadName.trim() === '') {
        setRoadError('Enter nearby or landmark Name');
        return;
      }
    console.log('Save Address Clicked');
  };

  return (
    <ScrollView style={styles.main}>
      <CustomTextInput
        label={'Name'}
        value={name}
        onChangeText={text => setName(text)}
        keyboardType={'default'}
      />
      {nameError && <Text style={styles.errorText}>{nameError}</Text>}
      <CustomTextInput
        label={'Phone Number'}
        value={phoneNo}
        onChangeText={text => setPhoneNo(text)}
        keyboardType={'number-pad'}
        maxLength={10}
      />
      {phoneError && <Text style={styles.errorText}>{phoneError}</Text>}
      <CustomTextInput
        label={'Pincode '}
        value={pinCode}
        onChangeText={text => setPinCode(text)}
        keyboardType={'number-pad'}
        maxLength={6}
      />
      {pinCodeError && <Text style={styles.errorText}>{pinCodeError}</Text>}
      <CustomTextInput
        label={'State '}
        value={stateName}
        onChangeText={text => setStateName(text)}
        keyboardType={'default'}
      />
      {stateError && <Text style={styles.errorText}>{stateError}</Text>}
      <CustomTextInput
        label={'City '}
        value={city}
        onChangeText={text => setCity(text)}
        keyboardType={'default'}
      />
      {cityError && <Text style={styles.errorText}>{cityError}</Text>}
      <CustomTextInput
        label={'House '}
        value={house}
        onChangeText={text => setHouse(text)}
        keyboardType={'default'}
      />
      {houseError && <Text style={styles.errorText}>{houseError}</Text>}
      <CustomTextInput
        label={'Road '}
        value={roadName}
        onChangeText={text => setRoadName(text)}
        keyboardType={'default'}
      />
      {roadError && <Text style={styles.errorText}>{roadError}</Text>}
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

export default AddAddress;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  errorText: {
    fontSize: responsive(18),
    color: AppColor.warning,
    marginHorizontal: responsive(20),
  },
  buttonHolder: {
    width: '90%',
    alignSelf: 'center',
  },
});
