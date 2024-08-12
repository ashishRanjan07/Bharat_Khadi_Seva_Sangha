import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppColor} from '../../../utils/AppColor';
import CustomHeader from '../../../components/CustomHeader';
import {ImagePath} from '../../../utils/ImagePath';
import {responsive} from '../../../utils/Responsive';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomList from '../../../components/CustomList';
const Setting = () => {
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
          />
          <CustomList
            text={'Select language'}
            iconName={'language'}
            Icon={MaterialIcons}
          />
          <CustomList
            text={'Notification Settings'}
            iconName={'notifications'}
            Icon={MaterialIcons}
          />
          <CustomList
            text={'Terms, Polices and License'}
            iconName={'policy'}
            Icon={MaterialIcons}
          />
          <CustomList
            text={'Browse FAQs'}
            iconName={'question-answer'}
            Icon={MaterialIcons}
          />
          <CustomList
            text={'Logout'}
            iconName={'logout'}
            Icon={MaterialIcons}
          />
        </View>
      </ScrollView>
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
