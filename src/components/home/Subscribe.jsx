import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {responsive} from '../../utils/Responsive';
import {AppColor} from '../../utils/AppColor';
import CustomTextInput from '../CustomTextInput';
import CustomButton from '../CustomButton';
import {showToast} from '../../utils/ToastHelper';
import {subscribe_email} from '../../api/auth_api';
import {BarIndicator} from 'react-native-indicators';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [loading, setLoading] = useState(false);
  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    if (email.length > 0) {
      setEmailError('');
    }
  }, [email]);
  const handleSubscribe = async () => {
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
    try {
      setLoading(true);
      const data = {
        email: email,
      };
      const response = await subscribe_email(data);
      if (response.status_code === 200) {
        showToast(
          'success',
          'Successfully Subscribed our news Letter.',
          'You will receive our new and all offer related info on email.',
        );
        setEmail('');
        setLoading(false);
      }
    } catch (error) {
      showToast('error', 'Try again', 'Something went wrong...');
    }
  };

  return (
    <View style={styles.main}>
      {loading ? (
        <View style={styles.loaderView}>
          <View style={styles.loaderContainer}>
            <BarIndicator color={AppColor.primary} />
            <Text style={styles.loaderText}>Subscribing please wait...</Text>
          </View>
        </View>
      ) : (
        <>
          <CustomTextInput
            label={'Subscribe our News Letter'}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType={'email-address'}
          />
          {emailError && (
            <View style={styles.errorHolder}>
              <Text style={{color: AppColor.warning, textAlign: 'center'}}>
                {emailError}
              </Text>
            </View>
          )}
          <View style={{width: '70%', alignSelf: 'center'}}>
            <CustomButton
              title={'Subscribe'}
              color={AppColor.primary}
              textColor={AppColor.white}
              handleAction={handleSubscribe}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Subscribe;

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    padding: responsive(10),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    borderColor: AppColor.white,
    margin: responsive(5),
    width: '95%',
    alignSelf: 'center',
  },
  errorHolder: {
    // padding: responsive(5),
    width: '95%',
    alignSelf: 'center',
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
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: responsive(10),
    height: responsive(225),
  },
});
