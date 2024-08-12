import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../../utils/AppColor';
import {ImagePath} from '../../utils/ImagePath';
import {responsive} from '../../utils/Responsive';
import CustomTextInput from '../../components/CustomTextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../components/CustomButton';
import {showToast} from '../../utils/ToastHelper';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

const Registration = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [userIdError, setUserIdError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const userIdRegExp = /[A-Z]/;

  useEffect(() => {
    if (email.length > 0) {
      setEmailError('');
    }
    const isValidEmail = emailRegExp.test(email.trim());
    if (isValidEmail) {
      setEmailError('');
    }
    if (password.length > 0) {
      setPasswordError('');
    }
    if (userId.length > 0) {
      setUserIdError('');
    }
  }, [email, password, userId]);

  const handleRegistration = async () => {
    if (email.length === 0 && userId.length === 0 && password.length === 0) {
      setEmailError('Enter Email Id');
      setPasswordError('Please enter password');
      setUserIdError('PLease enter user id');
      return;
    }
    if (email.trim() === '') {
      setEmailError('Please Enter Email Id');
      return;
    }
    const isValidEmail = emailRegExp.test(email.trim());
    if (!isValidEmail) {
      showToast(
        'error',
        'Email Id Validation Error',
        'Please enter the valid Email Id',
      );
      return;
    }
    if (userId.trim() === '') {
      setUserIdError('Please enter userId');
      return;
    }
    const isUserIdValid = userIdRegExp.test(userId.trim());
    if (isUserIdValid) {
      showToast(
        'error',
        'UserId Validation Error',
        'Please use lowercase in UserId',
      );
      return;
    }
    if (password.trim() === '') {
      setPasswordError('Please enter password');
      return;
    }
    if (password.length < 6) {
      showToast(
        'error',
        'Password Validation',
        'More than 6 digit password Required',
      );
      return;
    }
    // console.log('clicked on the registration Button');
    showToast('success', 'Registration Success', 'registration Successfully.');
  };

  const handleAlreadyHaveAnAccount = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.main}>
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.white} />
      <Image
        source={ImagePath.logo}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <View style={{width: '80%'}}>
        <CustomTextInput
          label={'Email*'}
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType={'email-address'}
        />
        {emailError && (
          <View style={styles.errorHolder}>
            <Text style={{color: AppColor.warning}}>{emailError}</Text>
          </View>
        )}
        <CustomTextInput
          label={'UserId*'}
          value={userId}
          onChangeText={text => setUserId(text)}
          keyboardType={'default'}
          maxLength={15}
        />
        {userIdError && (
          <View style={styles.errorHolder}>
            <Text style={{color: AppColor.warning}}>{userIdError}</Text>
          </View>
        )}
        <View style={styles.passwordView}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordHolder}>
            <TextInput
              style={styles.textInputBox}
              placeholder={'Password*'}
              placeholderTextColor={AppColor.borderColor}
              keyboardType={'default'}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              style={{width: '10%'}}
              onPress={() => setShowPassword(!showPassword)}>
              <MaterialCommunityIcons
                name={showPassword ? 'eye-off' : 'eye'}
                size={responsive(25)}
                color={AppColor.borderColor}
              />
            </TouchableOpacity>
          </View>
        </View>
        {passwordError && (
          <View style={styles.errorHolder}>
            <Text style={{color: AppColor.warning}}>{passwordError}</Text>
          </View>
        )}
        <CustomButton
          title={'Register'}
          color={AppColor.primary}
          textColor={AppColor.white}
          handleAction={handleRegistration}
        />
        {/* Already Have an Account */}
        <TouchableOpacity
          style={styles.newUserHolder}
          onPress={handleAlreadyHaveAnAccount}>
          <Text style={[styles.label, {color: AppColor.success}]}>
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '75%',
    height: responsive(150),
  },
  passwordView: {
    padding: responsive(10),
    width: '100%',
  },
  label: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'left',
  },
  textInputBox: {
    width: '90%',
    backgroundColor: AppColor.white,
    color: AppColor.black,
    fontSize: responsive(18),
    fontFamily: 'NatoSans-Medium',
  },
  passwordHolder: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: AppColor.borderColor,
    borderRadius: responsive(5),
    marginVertical: 5,
  },
  errorHolder: {
    padding: responsive(5),
    width: '95%',
    alignSelf: 'center',
  },
  newUserHolder: {
    padding: responsive(10),
    alignItems: 'center',
    marginBottom: responsive(10),
  },
});
