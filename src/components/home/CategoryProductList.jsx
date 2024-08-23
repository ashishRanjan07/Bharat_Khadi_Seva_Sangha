import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppColor} from '../../utils/AppColor';
import ListHeader from '../ListHeader';
import {responsive} from '../../utils/Responsive';
import {product_list} from '../../api/auth_api';
import {showToast} from '../../utils/ToastHelper';
import Toast from 'react-native-toast-message';
import {BarIndicator} from 'react-native-indicators';

const CategoryProductList = ({route}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [imageLoader, setImageLoader] = useState(true);
  const {item} = route.params;
  const handleProductInside = async item => {
    try {
      setLoading(true);
      const data = {
        category_id: item?.id,
      };
      const response = await product_list(data);
      if (response.status_code === 200) {
        setLoading(false);
        navigation.navigate('Product List', {item: response});
      } else {
        setLoading(false);
        showToast(
          'error',
          'No Product Found',
          'No any Product available inside this category',
        );
      }
    } catch (error) {
      showToast('error', 'Try Again', 'Something went wrong');
    }
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderHolder}
        onPress={() => handleProductInside(item)}>
        {loading && (
          <ActivityIndicator
            size={'large'}
            color={AppColor.primary}
            style={styles.loader}
          />
        )}
        <Image
          source={{
            uri: item?.img[0]?.img
              ? item?.img[0]?.img
              : 'https://khadi.atomax.in/wp-content/uploads/2024/01/Untitled-1-600-x-400-copy.jpg',
          }}
          resizeMode="cover"
          style={styles.imageStyle}
          onLoadStart={() => setImageLoader(true)}
          onLoadEnd={() => setImageLoader(false)}
          onError={() => setImageLoader(false)}
        />
        <Text style={styles.text}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
      <ListHeader title={`${item?.name}'s Sub Category`} />
      <FlatList
        data={item?.sub_array}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={{alignSelf: 'center'}}
      />
      {loading && (
        <View style={styles.loaderView}>
          <View style={styles.loaderContainer}>
            <BarIndicator color={AppColor.primary} />
            <Text style={styles.loaderText}>Please wait...</Text>
          </View>
        </View>
      )}
      <Toast />
    </View>
  );
};

export default CategoryProductList;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  renderHolder: {
    alignSelf: 'center',
    width: '45%',
    alignItems: 'center',
    margin: '2.5%',
    elevation: 5,
    backgroundColor: AppColor.white,
    borderRadius: responsive(10),
    gap: responsive(10),
  },
  imageStyle: {
    height: responsive(250),
    width: '100%',
    borderRadius: responsive(10),
  },
  text: {
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(18),
    textAlign: 'center',
    marginBottom: responsive(5),
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
  loaderText: {
    fontSize: responsive(18),
    color: AppColor.primary,
    textAlign: 'center',
  },
  loader: {
    position: 'absolute',
  },
});
