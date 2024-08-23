import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {responsive} from '../../utils/Responsive';
import {AppColor} from '../../utils/AppColor';
import {BarIndicator} from 'react-native-indicators';
import {productCategory} from '../../api/auth_api';
import {useNavigation} from '@react-navigation/native';

const HomeCategory = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await productCategory();
      setLoading(false);
      setData(response.data);
    };
    fetchCategory();
  }, []);

  const handleSubCategory = item => {
    navigation.navigate('Category Details',{ item:item});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderHolder}
        onPress={() => handleSubCategory(item)}>
        <Image
          loadingIndicatorSource={{
            uri: 'https://khadi.atomax.in/wp-content/uploads/2024/01/Untitled-1-600-x-400-copy.jpg',
          }}
          source={{uri: item?.img[0]?.img}}
          resizeMode="cover"
          style={styles.imageStyle}
        />
        <Text style={styles.text}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <BarIndicator
            size={responsive(25)}
            color={AppColor.primary}
            style={styles.loaderStyle}
          />
        </View>
      ) : (
        <View>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({
  main: {
    marginBottom: responsive(5),
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.white,
  },
  loaderStyle: {
    padding: 20,
  },
  renderHolder: {
    marginHorizontal: responsive(15),
    padding: responsive(10),
    alignItems: 'center',
    gap: responsive(5),
    backgroundColor: AppColor.white,
    elevation: 10,
    width: responsive(145),
    marginBottom: responsive(10),
    marginTop: responsive(10),
    alignSelf: 'center',
  },
  text: {
    fontSize: responsive(16),
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
    textAlign: 'center',
  },
  imageStyle: {
    width: responsive(50),
    height: responsive(50),
    borderRadius: responsive(25),
  },
});
