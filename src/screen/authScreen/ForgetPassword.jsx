import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../../utils/AppColor';
import {ImagePath} from '../../utils/ImagePath';
import {responsive} from '../../utils/Responsive';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {showToast} from '../../utils/ToastHelper';
import Toast from 'react-native-toast-message';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [step, setStep] = useState(3);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState(null);

  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    if (email.length > 0) {
      setEmailError('');
    }
    if (otp.length > 0) {
      setOtpError('');
    }
    if (newPassword.length > 0) {
      setNewPasswordError('');
    }
    if (confirmNewPassword.length > 0) {
      setConfirmNewPasswordError('');
    }
  }, [email, otp, newPassword, confirmNewPassword]);
  const handleSubmit = () => {
    console.log(email, 'Line 13');
    if (email.trim() === '') {
      setEmailError('Please Enter valid Email id');
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
  };
  const handleVerifyOtp = () => {
    if (otp.trim() === '') {
      setOtpError('Please enter Otp');
      return;
    }
    if (otp.length < 4) {
      showToast(
        'error',
        'OTP Validation',
        'Please Enter valid 4 digit Otp code.',
      );
      return;
    }
    console.log('Otp verify button Clicked');
  };
  const handleUpdatePassword = () => {
    if (newPassword.trim() === '' && confirmNewPassword.trim() === '') {
      setNewPasswordError('New Password is required.');
      setConfirmNewPasswordError('Confirm Password is required.');
      return;
    }
    if (newPassword.trim() === '') {
      setNewPasswordError('New Password is required.');
      return;
    }
    if (confirmNewPassword.trim() === '') {
      setConfirmNewPasswordError('Confirm Password is required.');
      return;
    }
    if (confirmNewPassword.length < 6) {
      showToast(
        'error',
        'Password Validation',
        'Password must be greater than 6 digit',
      );
      return;
    }
    if (newPassword.trim() !== confirmNewPassword.trim()) {
      setConfirmNewPasswordError('Passwords do not match.');
      showToast(
        'error',
        'Password Mismatch',
        'New Password and Confirm New Password do not match.',
      );
      return;
    }
    console.log('Clicked on the update Password Section');
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
        {step === 1 && (
          <>
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
            <CustomButton
              title={'Submit'}
              color={AppColor.primary}
              handleAction={handleSubmit}
            />
          </>
        )}
        {step === 2 && (
          <>
            <CustomTextInput
              label={'OTP*'}
              value={otp}
              onChangeText={text => setOtp(text)}
              keyboardType={'number-pad'}
              maxLength={4}
            />
            {otpError && (
              <View style={styles.errorHolder}>
                <Text style={{color: AppColor.warning}}>{otpError}</Text>
              </View>
            )}
            <CustomButton
              title={'Verify OTP'}
              color={AppColor.primary}
              textColor={AppColor.white}
              handleAction={handleVerifyOtp}
            />
          </>
        )}
        {step === 3 && (
          <>
            <CustomTextInput
              label={'New Password*'}
              value={newPassword}
              onChangeText={text => setNewPassword(text)}
              keyboardType={'default'}
            />
            {newPasswordError && (
              <View style={styles.errorHolder}>
                <Text style={{color: AppColor.warning}}>
                  {newPasswordError}
                </Text>
              </View>
            )}
            <CustomTextInput
              label={'Confirm New Password*'}
              value={confirmNewPassword}
              onChangeText={text => setConfirmNewPassword(text)}
              keyboardType={'default'}
            />
            {confirmNewPasswordError && (
              <View style={styles.errorHolder}>
                <Text style={{color: AppColor.warning}}>
                  {confirmNewPasswordError}
                </Text>
              </View>
            )}
            <CustomButton
              title={'Update Password'}
              color={AppColor.primary}
              handleAction={handleUpdatePassword}
              textColor={AppColor.white}
            />
          </>
        )}
      </View>
      {/* Back to login */}
      <TouchableOpacity style={styles.newUserHolder}>
        <Text style={styles.label}>Back to Login</Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
};

export default ForgetPassword;

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
    gap: responsive(10),
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
  label: {
    fontSize: responsive(18),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
  },
});
