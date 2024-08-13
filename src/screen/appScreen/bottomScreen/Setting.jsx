import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../../utils/AppColor';
import CustomHeader from '../../../components/CustomHeader';
import {ImagePath} from '../../../utils/ImagePath';
import {responsive} from '../../../utils/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomList from '../../../components/CustomList';
import {useNavigation} from '@react-navigation/native';
import LogoutAlert from '../../../components/LogoutAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {changeLanguage, login, saveData} from '../../../redux/action/Action';
import CustomBottomModel from '../../../components/CustomBottomModel';
const Setting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [alertVisible, setAlertVisible] = useState(false);
  const [notificationModalShow, setShowNotificationModal] = useState(false);
  const [showLanguageModal, setShowChangeLanguageModal] = useState(false);
  const [isChangeTheme, setIsChangeTheme] = useState(false);
  const [isChangeLanguage, setIsChangeLanguage] = useState(false);
  const [isNotificationEnable, setIsNotificationEnabled] = useState(true);

  const handelEditProfile = () => {
    navigation.navigate('Edit Profile');
  };

  const showAlert = () => {
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  const commonFunction = async () => {
    await AsyncStorage.removeItem('userInformation');
    await AsyncStorage.removeItem('isLoggedIn');
    dispatch(login('No'));
    dispatch(saveData('No'));
    dispatch(changeLanguage('en'));
    await AsyncStorage.removeItem('language');
  };

  const handleLogout = () => {
    commonFunction();
    console.log('Logout Successfully');
    hideAlert();
  };

  const handleFAQs = () => {
    navigation.navigate('FAQs');
  };
  const handleTermAndCondition = () => {
    navigation.navigate('Terms and Condition');
  };
  const handleShowNotificationModal = () => {
    console.log(notificationModalShow, 'Line 67');
    setShowNotificationModal(!notificationModalShow);
  };
  return (
    <View style={styles.main}>
      <CustomHeader title={' User Setting'} />
      <ScrollView style={styles.main}>
        <View style={styles.imageHolder}>
          <Image
            source={ImagePath.logo}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.listHolder}>
          <CustomList
            text={'Edit Profile'}
            iconName={'account-edit'}
            Icon={MaterialCommunityIcons}
            handleAction={handelEditProfile}
          />
          <CustomList
            text={'Saved Payment & Gift Card'}
            iconName={'wallet-giftcard'}
            Icon={MaterialIcons}
          />
          <CustomList
            text={'Save Address'}
            iconName={'address'}
            Icon={Entypo}
            handleAction={() => navigation.navigate('Address')}
          />
          <CustomList
            text={'Select language'}
            iconName={'language'}
            Icon={MaterialIcons}
            handleAction={() => setShowChangeLanguageModal(!showLanguageModal)}
          />
          <CustomList
            text={'Notification Settings'}
            iconName={'notifications'}
            Icon={MaterialIcons}
            handleAction={() =>
              setShowNotificationModal(!notificationModalShow)
            }
          />
          <CustomList
            text={'Terms, Polices and License'}
            iconName={'policy'}
            Icon={MaterialIcons}
            handleAction={handleTermAndCondition}
          />
          <CustomList
            text={'Browse FAQs'}
            iconName={'question-answer'}
            Icon={MaterialIcons}
            handleAction={handleFAQs}
          />
          <CustomList
            text={'Logout'}
            iconName={'logout'}
            Icon={MaterialIcons}
            handleAction={showAlert}
          />
        </View>
      </ScrollView>
      <LogoutAlert
        visible={alertVisible}
        title="Confirm ?"
        message="are you sure you want to logout ?"
        onClose={hideAlert}
        onConfirm={handleLogout}
      />
      <CustomBottomModel
        visible={notificationModalShow}
        onClose={handleShowNotificationModal}
        onConfirm={handleShowNotificationModal}
        message={'Change Notification Settings'}
        iconName={'notifications'}
        name={'Notification'}
        isEnabled={isNotificationEnable}
        isEnabledValued={'Yes'}
        isNotEnabledValue={'No'}
        handleEnable={value => setIsNotificationEnabled(value)}
      />
      <CustomBottomModel
        visible={showLanguageModal}
        onClose={() => setShowChangeLanguageModal(!showLanguageModal)}
        onConfirm={() => setShowChangeLanguageModal(!showLanguageModal)}
        message={'Change your Language'}
        iconName={'language'}
        name={'Language'}
        isEnabled={isChangeLanguage}
        isEnabledValued={'Hindi'}
        isNotEnabledValue={'En'}
        handleEnable={value => setIsChangeLanguage(value)}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  imageHolder: {
    // borderWidth: 2,
    width: '100%',
    backgroundColor: AppColor.white,
    alignItems: 'center',
  },
  imageStyle: {
    height: responsive(200),
    width: '100%',
  },
  listHolder: {
    gap: responsive(20),
    marginBottom: responsive(10),
  },
});
