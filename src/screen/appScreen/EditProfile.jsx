import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../../utils/AppColor';
import ListHeader from '../../components/ListHeader';
import {responsive} from '../../utils/Responsive';
import {useNavigation} from '@react-navigation/native';
import UpdateFieldTextInput from '../../components/UpdateFieldTextInput';
import CustomButton from '../../components/CustomButton';
import {ImagePath} from '../../utils/ImagePath';
import Feather from 'react-native-vector-icons/Feather';
import {BarIndicator} from 'react-native-indicators';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageModal from '../../components/ImageModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('India');
  const [postCode, setPostCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setSate] = useState('');
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [shoeModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchUserProfileData = async () => {
      setLoading(true);
      try {
        const responseString = await AsyncStorage.getItem('userInformation');
        if (responseString) {
          const responseObject = JSON.parse(responseString);
          setData(responseObject);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error parsing user information:', error);
        setLoading(false);
      }
    };
    fetchUserProfileData();
  }, []);

  const hideModal = () => {
    console.log(shoeModal, 'Line 37');
    setShowModal(!shoeModal);
  };

  const openCamera = () => {
    try {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
        cameraType: 'front',
        saveToPhotos: true,
        quality: 0.7,
      };
      launchCamera(options, async response => {
        if (response.didCancel) {
          console.log('User cancel Camera');
        } else if (response.error) {
          console.log('Camera Error:', response.error);
        } else {
          let imageUri = response.uri || response.assets[0]?.uri;
          setShowModal(false);
          setProfileImage(imageUri);
        }
      });
    } catch (error) {
      console.log('Error in Opening camera', error.message);
    }
  };
  const openGallery = () => {
    try {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };

      launchImageLibrary(options, async response => {
        if (response.didCancel) {
          // console.log('User Cancel Image Picker');
        } else if (response.error) {
          // console.log('Image Picker Error:', response.error);
        } else {
          let imageUri = response.uri || response.assets[0]?.uri;
          setShowModal(false);
          setProfileImage(imageUri);
        }
      });
    } catch (error) {
      // console.log('Error in Open Image Picker:', error.message);
    }
  };
  return (
    <View style={styles.main}>
      <ListHeader title={'Edit Profile'} />
      <ScrollView style={styles.main}>
        {/* Image Section */}
        <View style={styles.imageHolder}>
          {profileImage ? (
            <Image
              source={{uri: profileImage}}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          ) : (
            <Image
              source={ImagePath.user}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          )}

          <TouchableOpacity onPress={hideModal} style={styles.iconHolder}>
            <Feather
              name="edit"
              size={responsive(30)}
              color={AppColor.borderColor}
            />
          </TouchableOpacity>
        </View>
        {/* Name */}
        <UpdateFieldTextInput
          title={'Name'}
          value={name}
          onChange={text => setName(text)}
          placeholder={`${data?.profile_data[0]?.first_name}${' '}${
            data?.profile_data[0]?.last_name
          }`}
          keyboardType={'default'}
        />
        {/* Mobile Number */}
        {/* <UpdateFieldTextInput
          title={'Mobile'}
          value={mobile}
          onChange={text => setMobile(text)}
          placeholder={'Mobile'}
          keyboardType={'number-pad'}
          maxLength={10}
          editable={false}
        /> */}
        <UpdateFieldTextInput
          title={'Email'}
          value={email}
          onChange={text => setEmail(text)}
          placeholder={`${data?.profile_data[0]?.email}`}
          keyboardType={'email-address'}
        />
        <UpdateFieldTextInput
          title={'Country'}
          value={country}
          onChange={text => setCountry(text)}
          placeholder={'Country'}
          keyboardType={'default'}
          editable={false}
        />
        {/* PinCode */}
        <UpdateFieldTextInput
          title={'Pin Code'}
          value={postCode}
          onChange={text => setPostCode(text)}
          placeholder={`${data?.profile_data[0]?.postcode}`}
          keyboardType={'number-pad'}
        />
        {/* City */}
        <UpdateFieldTextInput
          title={'City'}
          value={city}
          onChange={text => setCity(text)}
          placeholder={`${data?.profile_data[0]?.city}`}
          keyboardType={'default'}
        />
        {/* State */}
        <UpdateFieldTextInput
          title={'State'}
          value={state}
          onChange={text => setSate(text)}
          placeholder={`${data?.profile_data[0]?.state}`}
          keyboardType={'default'}
        />
        <UpdateFieldTextInput
          title={'User Id'}
          value={userName}
          onChange={text => setUserName(text)}
          placeholder={`${data?.profile_data[0]?.username}`}
          keyboardType={'default'}
          editable={false}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: responsive(10),
          }}>
          <CustomButton
            title={'Update'}
            color={AppColor.primary}
            textColor={AppColor.white}
          />
        </View>
        <ImageModal
          isVisible={shoeModal}
          onClose={hideModal}
          openCamera={openCamera}
          openGallery={openGallery}
        />
      </ScrollView>
      {loading && (
        <View style={styles.loaderView}>
          <View style={styles.loaderContainer}>
            <BarIndicator color={AppColor.primary} />
            <Text style={styles.loaderText}>
              Fetching your details please wait...
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  textInputBoxView: {
    borderWidth: 2,
    marginTop: responsive(10),
    width: '95%',
    alignSelf: 'center',
    borderRadius: responsive(5),
    borderColor: AppColor.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'NotoSans-Medium',
    color: AppColor.borderColor,
    fontSize: responsive(18),
    textAlign: 'left',
  },
  imageHolder: {
    alignItems: 'center',
    padding: responsive(10),
  },
  imageStyle: {
    width: responsive(150),
    height: responsive(150),
    borderRadius: responsive(75),
    borderWidth: 2,
  },
  iconHolder: {
    borderWidth: 2,
    padding: responsive(10),
    borderRadius: responsive(10),
    position: 'absolute',
    bottom: responsive(10),
    right: responsive(120),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    borderColor: AppColor.white,
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
});
