import {
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../../../utils/AppColor';
import CustomHeader from '../../../components/CustomHeader';
import {responsive} from '../../../utils/Responsive';
import CustomSearch from '../../../components/CustomSearch';
import {product_list} from '../../../api/auth_api';
import {BarIndicator} from 'react-native-indicators';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [randomProductList, setRandomProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const randomProduct = async () => {
      const response = await product_list({rand: 1});
      setRandomProductList(response?.data);
      setLoading(false);
      // console.log(response?.data[0], 'Line 14');
    };
    randomProduct();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderStaticItem}
        onPress={() => navigation.navigate('Product Details', {item: item})}>
        <ImageBackground
          source={{uri: item?.thumbnail_image[0]?.guid}}
          resizeMode="cover"
          style={styles.backgroundImageStyle}>
          <View style={styles.nameTextHolder}>
            <Text style={styles.text}>{item.post_title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColor.white} />
      <CustomHeader title={'Search'} />
      {/* Search Box */}
      {loading ? (
        <View style={styles.loaderContainer}>
          <BarIndicator color={AppColor.primary} />
        </View>
      ) : (
        <>
          <CustomSearch value={searchText} setValue={setSearchText} />
          <FlatList
            data={randomProductList}
            renderItem={renderItem}
            keyExtractor={Item => Item.id}
            numColumns={2}
          />
        </>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  searchBoxHolder: {
    borderWidth: 2,
    marginVertical: responsive(10),
    width: '95%',
    alignSelf: 'center',
    borderRadius: responsive(5),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: AppColor.borderColor,
    gap: responsive(10),
    backgroundColor: AppColor.borderColor,
  },
  searchBox: {
    alignItems: 'center',
    width: '15%',
    padding: responsive(15),
  },
  textInputBox: {
    width: '80%',
    borderRadius: responsive(10),
    fontSize: responsive(18),
    color: AppColor.black,
    backgroundColor: AppColor.white,
    fontFamily: 'NotoSans-Medium',
    paddingHorizontal: responsive(10),
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  renderStaticItem: {
    borderWidth: 2,
    width: '45%',
    marginHorizontal: responsive(10),
    marginVertical: responsive(5),
    padding: responsive(10),
    borderRadius: responsive(5),
    borderColor: AppColor.white,
    elevation: responsive(5),
    backgroundColor: AppColor.white,
  },
  backgroundImageStyle: {
    height: responsive(150),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: responsive(14),
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
    padding: responsive(10),
    textAlign: 'center',
  },
  nameTextHolder: {
    backgroundColor: '#f0fff0',
    borderRadius: responsive(5),
    elevation: responsive(10),
  },
});
