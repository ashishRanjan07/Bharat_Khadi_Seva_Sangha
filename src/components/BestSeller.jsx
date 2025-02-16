import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../utils/AppColor';
import {responsive} from '../utils/Responsive';
import {best_seller, productCategory} from '../api/auth_api';
import {useNavigation} from '@react-navigation/native';
import {BarIndicator} from 'react-native-indicators';

const BestSeller = ({id, bannerFor}) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);
  const [product, setProduct] = useState([]);
  const [imageLoading, setImageLoading] = useState(true);

  const handleBestSeller = () => {
    setActive(1);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await productCategory();
      const filteredData = response.data.filter(
        item => item.name === bannerFor,
      );
      setData(filteredData);
    };
    fetchCategory();
    bestSeller();
  }, []);

  const bestSeller = async () => {
    const data = {
      category_id: id,
      best_seller_id: '178',
    };
    const response = await best_seller(data);
    setProduct(response?.data);
  };

  const fetchProductUsingBestSellerId = async id => {
    console.log(id, 'Line 36');
    const data = {
      category_id: id,
      best_seller_id: '178',
    };
    console.log(data, 'Line 40');
    const response = await best_seller(data);
    setProduct(response?.data);
  };

  const handleRecommended = () => {
    console.log('Clicked on the recommended');
    setActive('Recommended');
  };
  const handleProduct = async cat => {
    fetchProductUsingBestSellerId(cat?.id);
  };

  const handleShowProducts = item => {
    navigation.navigate('Product Details', {item: item});
  };

  return (
    <View style={styles.main}>
     <SafeAreaView/>
      <View style={styles.buttonHolder}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: active === 1 ? '#900C3F' : AppColor.white},
          ]}
          onPress={handleBestSeller}>
          <Text
            style={[
              styles.buttonText,
              {color: active === 1 ? AppColor.white : AppColor.black},
            ]}>
            Best Seller
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: active != 1 ? '#900C3F' : AppColor.white},
          ]}
          onPress={handleRecommended}>
          <Text
            style={[
              styles.buttonText,
              {color: active != 1 ? AppColor.white : AppColor.black},
            ]}>
            Recommended
          </Text>
        </TouchableOpacity>
      </View>
      {active === 1 && (
        <>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.catHolder}>
            {data[0]?.mid_array?.map(cat => (
              <TouchableOpacity
                key={cat?.id}
                style={styles.contentHolder}
                onPress={() => handleProduct(cat)}>
                <Text style={{color: AppColor.black}}>{cat?.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {product?.map((product, index) => (
              <TouchableOpacity
                key={index}
                style={styles.productHolder2}
                onPress={() => handleShowProducts(product)}>
                {imageLoading && (
                  <ActivityIndicator
                    size={'large'}
                    color={AppColor.primary}
                    style={styles.loader}
                  />
                )}
                <Image
                  source={{
                    uri: product?.thumbnail_image[0]?.guid
                      ? product?.thumbnail_image[0]?.guid
                      : 'https://khadi.atomax.in/wp-content/uploads/2024/01/Untitled-1-600-x-400-copy.jpg',
                  }}
                  resizeMode="cover"
                  style={styles.imageStyle}
                  onLoadStart={() => setImageLoading(true)}
                  onLoadEnd={() => setImageLoading(false)}
                  onError={() => setImageLoading(false)}
                />
                <Text style={styles.nameText} numberOfLines={3}>
                  {product?.post_title}
                </Text>
                <Text style={styles.priceText}>
                  Rs.{product?.price[0]?.min_price}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  main: {
    backgroundColor: AppColor.white,
    width: '95%',
    alignSelf: 'center',
    marginBottom: responsive(10),
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    padding: responsive(10),
    width: responsive(175),
    borderRadius: responsive(10),
    alignItems: 'center',
  },
  buttonText: {
    color: AppColor.white,
    fontSize: responsive(16),
    fontFamily: 'NotoSans-Medium',
    letterSpacing: responsive(1),
  },
  catHolder: {
    backgroundColor: AppColor.white,
    marginVertical: responsive(10),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  contentHolder: {
    flexDirection: 'row',
    gap: responsive(10),
    padding: responsive(10),
    borderWidth: 2,
    marginHorizontal: responsive(5),
    borderRadius: responsive(10),
    backgroundColor: AppColor.borderColor,
    borderColor: AppColor.borderColor,
  },
  productHolder2: {
    borderWidth: 2,
    marginHorizontal: responsive(10),
    borderRadius: responsive(5),
    overflow: 'hidden',
    alignItems: 'center',
    gap: responsive(5),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    borderColor: AppColor.white,
    marginBottom: responsive(10),
    width: responsive(150),
  },
  nameText: {
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
    fontSize: responsive(16),
    width: '80%',
    textAlign: 'center',
  },
  priceText: {
    fontSize: responsive(15),
    color: AppColor.success,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
  },
  imageStyle: {
    height: responsive(150),
    width: '100%',
  },
  loader: {
    position: 'absolute',
    top: '20%',
  },
});
