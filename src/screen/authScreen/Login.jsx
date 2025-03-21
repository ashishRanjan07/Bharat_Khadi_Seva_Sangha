import {
  Alert,
  Image,
  SafeAreaView,
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
import {BarIndicator} from 'react-native-indicators';
import {useNavigation} from '@react-navigation/native';
import {validateLogin} from '../../api/auth_api';
import {useDispatch, useSelector} from 'react-redux';
import {login, saveData} from '../../redux/action/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userIdError, setUserIdError] = useState(null);
  const [showPasswordError, setShowPasswordError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);

  const userIdRegExp = /[A-Z]/;

  useEffect(() => {
    if (userId.length > 0) {
      setUserIdError('');
    }
    if (password.length > 0) {
      setShowPasswordError('');
    }
  }, [userId, password]);

  const handleLogin = async () => {
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
    const loginData = {
      username: userId,
      userpass: password,
    };
    try {
      setLoading(true);
      const response = await validateLogin(loginData);
      if (response.status_code === 200) {
        await AsyncStorage.setItem('isLoggedIn', 'Yes');
        const jsonValue = JSON.stringify(response);
        await AsyncStorage.setItem('userInformation', jsonValue);
        dispatch(login('Yes'));
        dispatch(saveData('Yes'));
        setLoading(false);
        navigation.navigate('AppStack');
      } else {
        setLoading(false);
        setLoginError('Invalid Credentials', response.message);
      }
    } catch (error) {
      showToast(
        'info',
        'Try Again',
        'Something went wrong. Please try again...',
      );
    }
  };

  const handleNewUserRegistration = () => {
    navigation.navigate('Registration');
  };
  const handleForgetPassword = () => {
    navigation.navigate('ForgetPassword');
  };

  return (
    <View style={styles.main}>
     <SafeAreaView/>
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
        {loginError && (
          <View style={styles.errorHolder}>
            <Text style={{color: AppColor.warning}}>{loginError}</Text>
          </View>
        )}
        <CustomButton
          title={'Login'}
          color={AppColor.primary}
          handleAction={handleLogin}
          textColor={AppColor.white}
        />
        {/* New User Registration */}
        <TouchableOpacity
          style={styles.newUserHolder}
          onPress={handleNewUserRegistration}>
          <Text style={[styles.label, {color: AppColor.success}]}>
            New User Registration
          </Text>
        </TouchableOpacity>
        {/* Forget Password */}
        <TouchableOpacity
          style={styles.newUserHolder}
          onPress={handleForgetPassword}>
          <Text style={[styles.label, {color: AppColor.warning}]}>
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>
      <Toast />
      {loading && (
        <View style={styles.loaderView}>
          <View style={styles.loaderContainer}>
            <BarIndicator color={AppColor.primary} />
            <Text style={styles.loaderText}>
              Validating your Credentials please wait...
            </Text>
          </View>
        </View>
      )}
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
  loaderContainer: {
    gap: responsive(30),
    borderWidth: 2,
    width: '90%',
    alignSelf: 'center',
    padding: responsive(15),
    borderRadius: responsive(10),
    borderColor: AppColor.primary,
    backgroundColor: AppColor.white,
    paddingTop: responsive(30),
  },
  loaderText: {
    fontSize: responsive(18),
    color: AppColor.primary,
    textAlign: 'center',
  },
  loaderView: {
    position: 'absolute',
    borderWidth: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: responsive(10),
  },
});
