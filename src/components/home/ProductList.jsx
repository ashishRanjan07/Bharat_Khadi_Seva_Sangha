import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../utils/AppColor';
import ListHeader from '../ListHeader';
import {responsive} from '../../utils/Responsive';
import {useNavigation} from '@react-navigation/native';

const ProductList = ({route}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const {item} = route.params;

  const handleShowProducts = item => {
    navigation.navigate('Product Details', {item: item});
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderHolder}
        onPress={() => handleShowProducts(item)}>
        {loading && (
          <ActivityIndicator
            size={'large'}
            color={AppColor.primary}
            style={styles.loader}
          />
        )}
        <Image
          source={{
            uri: item?.thumbnail_image[0]?.guid
              ? item?.thumbnail_image[0]?.guid
              : 'https://khadi.atomax.in/wp-content/uploads/2024/01/Untitled-1-600-x-400-copy.jpg',
          }}
          resizeMode="cover"
          style={styles.imageStyle}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => setLoading(false)}
        />

        <Text style={styles.text} numberOfLines={2}>
          {item?.post_title}
        </Text>
        <Text style={styles.priceText}>Rs.{item?.regular_price}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.main}>
    <SafeAreaView/>
      <ListHeader title={'Product List'} />
      <FlatList
        data={item?.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductList;

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
    gap: responsive(5),
    height: responsive(350),
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
    width: '90%',
  },
  priceText: {
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(18),
    color: AppColor.borderColor,
  },
  loader: {
    position: 'absolute',
  },
});
