import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../utils/AppColor';
import ListHeader from '../../components/ListHeader';
import {responsive} from '../../utils/Responsive';
import {useNavigation} from '@react-navigation/native';
import UpdateFieldTextInput from '../../components/UpdateFieldTextInput';
import CustomButton from '../../components/CustomButton';
import {ImagePath} from '../../utils/ImagePath';
import Feather from 'react-native-vector-icons/Feather';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageModal from '../../components/ImageModal';

const EditProfile = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('Ashish Ranjan');
  const [mobile, setMobile] = useState('6206416452');
  const [email, setEmail] = useState('aviashishranjan@gmail.com');
  const [country, setCountry] = useState('India');
  const [postCode, setPostCode] = useState('800007');
  const [city, setCity] = useState('Patna');
  const [state, setSate] = useState('Bihar');
  const [userName, setUserName] = useState('ashishranjanmonal');
  const [profileImage, setProfileImage] = useState('');
  const [shoeModal, setShowModal] = useState(false);

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
              source={{uri:profileImage}}
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
        <UpdateFieldTextInput
          title={'Name'}
          value={name}
          onChange={text => setName(text)}
          placeholder={'Name'}
          keyboardType={'default'}
        />
        <UpdateFieldTextInput
          title={'Mobile'}
          value={mobile}
          onChange={text => setMobile(text)}
          placeholder={'Mobile'}
          keyboardType={'number-pad'}
          maxLength={10}
          editable={false}
        />
        <UpdateFieldTextInput
          title={'Email'}
          value={email}
          onChange={text => setEmail(text)}
          placeholder={'Email'}
          keyboardType={'email-address'}
        />
        <UpdateFieldTextInput
          title={'Country'}
          value={country}
          onChange={text => setCountry(text)}
          placeholder={'Country'}
          keyboardType={'default'}
        />
        <UpdateFieldTextInput
          title={'Pin Code'}
          value={postCode}
          onChange={text => setPostCode(text)}
          placeholder={'Post Code'}
          keyboardType={'number-pad'}
        />
        <UpdateFieldTextInput
          title={'City'}
          value={city}
          onChange={text => setCity(text)}
          placeholder={'City'}
          keyboardType={'default'}
        />
        <UpdateFieldTextInput
          title={'State'}
          value={state}
          onChange={text => setSate(text)}
          placeholder={'State'}
          keyboardType={'default'}
        />
        <UpdateFieldTextInput
          title={'User Id'}
          value={userName}
          onChange={text => setUserName(text)}
          placeholder={'User Name'}
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
    borderWidth:2,
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
});
