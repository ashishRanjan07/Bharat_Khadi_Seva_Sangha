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

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userIdError, setUserIdError] = useState(null);
  const [showPasswordError, setShowPasswordError] = useState(null);
  const userIdRegExp = /[A-Z]/;

  useEffect(() => {
    if (userId.length > 0) {
      setUserIdError('');
    }
    if (password.length > 0) {
      setShowPasswordError('');
    }
  }, [userId, password]);

  const handleLogin = () => {
    if (userId.length === 0 && password.length === 0) {
      setUserIdError('Please Enter User Id');
      setShowPasswordError('Please Enter Password');
      return;
    }
    if (userId.trim() === '') {
      setUserIdError('Please Enter User Id');
      return;
    }
    if (password.trim() === '') {
      setShowPasswordError('Please Enter Password');
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
    if (password.length < 6) {
      showToast(
        'error',
        'Password Validation Error',
        'Minimum 6 digit password required',
      );
    }
    console.log('Login BUtton Clicked', userId, password);
  };
  return (
    <View style={styles.main}>
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.white} />
      <Image
        source={ImagePath.logo}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <View style={styles.formHolder}>
        {/* Email */}
        <CustomTextInput
          value={userId}
          label={'User Id'}
          onChangeText={text => setUserId(text)}
          keyboardType={'default'}
        />
        {userIdError && (
          <View style={styles.errorHolder}>
            <Text style={{color: AppColor.warning}}>{userIdError}</Text>
          </View>
        )}
        {/* Password */}
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
        {showPasswordError && (
          <View style={styles.errorHolder}>
            <Text style={{color: AppColor.warning}}>{showPasswordError}</Text>
          </View>
        )}

        <CustomButton
          title={'Login'}
          color={AppColor.primary}
          handleAction={handleLogin}
        />
        {/* New User Registration */}
        <TouchableOpacity style={styles.newUserHolder}>
          <Text style={[styles.label, {color: AppColor.success}]}>
            New User Registration
          </Text>
        </TouchableOpacity>
        {/* Forget Password */}
        <TouchableOpacity style={styles.newUserHolder}>
          <Text style={[styles.label, {color: AppColor.warning}]}>
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>
      <Toast />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '75%',
    height: responsive(150),
  },
  formHolder: {
    width: '90%',
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
