import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../../utils/AppColor';
import ListHeader from '../ListHeader';
import Swiper from 'react-native-swiper';
import {responsive} from '../../utils/Responsive';
import {ImagePath} from '../../utils/ImagePath';
import CustomButton from '../CustomButton';
import {showToast} from '../../utils/ToastHelper';
import Toast from 'react-native-toast-message';

const ProductDetails = ({route}) => {
  const {item} = route.params;
  //   console.log(item, 'line 6');
  const [activeSize, setActiveSize] = useState(-1);
  const [regularPrice, setRegularPrice] = useState(item?.regular_price);
  const [salePrice, setSalePrice] = useState(item?.sale_price);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleAddToCart = () => {
    showToast('success', 'Added to Cart', 'Product added to Cart Successfully');
  };

  const toggleDescriptionVisibility = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleSizeClick = (index, sizeObj) => {
    if (index === -1) {
      setActiveSize(index);
      setRegularPrice(item?.regular_price);
      setSalePrice(item?.sale_price);
    } else {
      setRegularPrice(sizeObj?.child_price[0]?.max_price);
      setSalePrice(sizeObj?.child_price[0]?.min_price);
      setActiveSize(index);
    }
  };

  return (
    <View style={styles.main}>
    <SafeAreaView/>
      <ListHeader title={'Product Details'} />
      {/* Product Descriptions */}
      <ScrollView>
        <View style={styles.imageHolder}>
          <Swiper
            autoplay={true}
            autoplayTimeout={2}
            style={styles.swiper}
            showsPagination={false}>
            {item?.img?.map((imageObj, index) => (
              <Image
                loadingIndicatorSource={{uri: 'https://picsum.photo/200'}}
                key={index}
                source={{uri: imageObj.guid}}
                resizeMode="cover"
                style={styles.imageStyle}
              />
            ))}
          </Swiper>
        </View>
        <View style={styles.detailsHolder}>
          {/* Title */}
          <Text style={styles.title}>{item?.post_title}</Text>
          <View style={styles.shortDescriptionContainer}>
            <Text style={styles.shortDescription}>{item?.short_des}</Text>
            {showFullDescription && (
              <Text style={styles.shortDescription}>{item?.description}</Text>
            )}
            {!showFullDescription && (
              <TouchableOpacity onPress={toggleDescriptionVisibility}>
                <Text style={styles.viewMoreText}>View More Details</Text>
              </TouchableOpacity>
            )}
            {showFullDescription && (
              <TouchableOpacity onPress={toggleDescriptionVisibility}>
                <Text style={styles.viewMoreText}>Hide Extra Details</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Category */}
          <View style={styles.generalHolder}>
            {item?.category_id?.map((catObj, index) => (
              <View key={index} style={styles.categoryHolder}>
                <Text style={styles.text}>{catObj?.name}</Text>
              </View>
            ))}
          </View>
          {/* Price */}
          <View style={styles.generalHolder}>
            <Text style={styles.regularPrice}>
              {`\u20B9`}
              {regularPrice}
            </Text>
            <Text style={styles.spPrice}>
              {`\u20B9`}
              {salePrice}
            </Text>
            <Text style={[styles.regularPrice, {textDecorationLine: 'none'}]}>
              Stock({item?.stock})
            </Text>
          </View>
          {/* Size Holder */}
          <ScrollView horizontal>
            <TouchableOpacity
              style={[
                styles.sizeHolder,
                activeSize === -1 && styles.activeSize,
              ]}
              onPress={() => handleSizeClick(-1)}>
              <Text
                style={[
                  styles.sizeText,
                  activeSize === -1 && styles.activeSizeText,
                ]}>
                Size: Regular
              </Text>
            </TouchableOpacity>
            {item?.size?.map((sizeObj, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.sizeHolder,
                  activeSize === index && styles.activeSize,
                ]}
                onPress={() => handleSizeClick(index, sizeObj)}>
                <Text
                  style={[
                    styles.sizeText,
                    activeSize === index && styles.activeSizeText,
                  ]}>
                  {sizeObj?.post_excerpt}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.buttonHolder}>
        <View style={{width: '45%'}}>
          <CustomButton
            title={'Add to Cart'}
            color={'#FFBF00'}
            textColor={AppColor.black}
            handleAction={handleAddToCart}
          />
        </View>
        <View style={{width: '45%'}}>
          <CustomButton
            title={'Buy Now'}
            color={AppColor.success}
            textColor={AppColor.white}
            handleAction={() =>
              console.log('Product Added to Cart Successfully')
            }
          />
        </View>
      </View>
      <Toast />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  swiper: {
    height: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  imageHolder: {
    height: responsive(350),
    width: '100%',
  },
  detailsHolder: {
    gap: responsive(10),
    paddingHorizontal: responsive(10),
  },
  title: {
    fontSize: responsive(20),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
  },
  shortDescription: {
    fontFamily: 'NotoSans-Medium',
    color: AppColor.borderColor,
    fontSize: responsive(14),
    textAlign: 'justify',
  },
  categoryHolder: {
    borderWidth: 2,
    padding: responsive(5),
    borderRadius: responsive(5),
    backgroundColor: AppColor.borderColor,
    borderColor: AppColor.borderColor,
  },
  text: {
    fontSize: responsive(16),
    fontFamily: 'NotoSans-Medium',
    color: AppColor.white,
  },
  regularPrice: {
    fontSize: responsive(20),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
    letterSpacing: responsive(1),
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  spPrice: {
    fontSize: responsive(20),
    color: AppColor.success,
    fontFamily: 'NotoSans-Medium',
    letterSpacing: responsive(1),
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  generalHolder: {
    flexDirection: 'row',
    gap: responsive(15),
    alignItems: 'center',
  },
  sizeHolder: {
    borderRadius: responsive(5),
    backgroundColor: AppColor.white,
    elevation: responsive(10),
    borderColor: AppColor.white,
    marginBottom: responsive(5),
    marginHorizontal: responsive(10),
  },
  sizeText: {
    fontSize: responsive(16),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
    padding: responsive(10),
  },
  activeSize: {
    backgroundColor: AppColor.success,
  },
  activeSizeText: {
    color: AppColor.white,
  },
  shortDescriptionContainer: {
    marginBottom: responsive(10),
  },
  viewMoreText: {
    color: AppColor.black,
    textAlign: 'center',
    marginTop: responsive(5),
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
