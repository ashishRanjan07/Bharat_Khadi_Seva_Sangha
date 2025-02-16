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

const CategoryDetails = ({route}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const {item} = route.params;

  const handleCategoryProductList = item => {
    navigation.navigate('Category Product List', {item: item});
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.renderHolder}
        onPress={() => handleCategoryProductList(item)}>
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
              : 'https://www.khadindia.com/wp-content/uploads/2024/01/Logo-Of-Bharat-Khadi-Sevak-Sangha-1-2048x792.png.webp',
          }}
          resizeMode="stretch"
          style={styles.imageStyle}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.main}>
    <SafeAreaView/>
      <ListHeader title={`${item?.name}'s Category`} />
      <FlatList
        data={item?.mid_array}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={{alignSelf: 'center'}}
      />
    </View>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  imageStyle: {
    height: responsive(250),
    width: '100%',
    borderRadius: responsive(10),
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
  text: {
    color: AppColor.black,
    fontFamily: 'NotoSans-Medium',
    fontSize: responsive(18),
    textAlign: 'center',
    marginBottom: responsive(5),
  },
  loader: {
    position: 'absolute',
  },
});
