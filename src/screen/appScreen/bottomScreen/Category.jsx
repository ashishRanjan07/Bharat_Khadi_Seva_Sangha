import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppColor} from '../../../utils/AppColor';
import CustomHeader from '../../../components/CustomHeader';
import {productCategory} from '../../../api/auth_api';
import {BarIndicator} from 'react-native-indicators';
import {responsive} from '../../../utils/Responsive';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomCategoryModal from '../../../components/CustomCategoryModal';

const Category = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [subCategoryData, setSubCategoryData] = useState();

  useEffect(() => {
    // console.log('Category Section');
    const fetchCategory = async () => {
      const response = await productCategory();
      setLoading(false);
      setData(response.data);
      console.log(response?.data[0]?.img[0]?.img, 'Line 14');
    };
    fetchCategory();
  }, []);

  const handleShowSubCategory = item => {
    // console.log(item, 'Line 33');
    setShowSubCategory(!showSubCategory);
    setSubCategoryData(item);
  };
  return (
    <View style={styles.main}>
      <CustomHeader title={'Category'} />
      {loading ? (
        <View style={styles.loaderContainer}>
          <BarIndicator color={AppColor.primary} />
        </View>
      ) : (
        <>
          <ScrollView style={styles.allCategoryHolder}>
            {data.map((item, index) => (
              <View key={item.id} style={styles.categoryHolder}>
                <Image
                  loadingIndicatorSource={{
                    uri: 'https://khadi.atomax.in/wp-content/uploads/2024/01/Untitled-1-600-x-400-copy.jpg',
                  }}
                  source={{uri: item?.img[0]?.img}}
                  resizeMode="cover"
                  style={{width: '100%', height: responsive(300)}}
                />
                <TouchableOpacity
                  style={styles.categoryNameHolder}
                  onPress={() => handleShowSubCategory(item)}>
                  <Text style={styles.text}>{item?.name}</Text>
                  <MaterialIcons
                    name="arrow-circle-down"
                    size={responsive(30)}
                    color={AppColor.black}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <CustomCategoryModal
            onClose={()=>setShowSubCategory(!showSubCategory)}
            visible={showSubCategory}
            onConfirm={()=>setShowSubCategory(!showSubCategory)}
            message={'Please select the Category'}
            data={subCategoryData}
          />
        </>
      )}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.white,
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
  allCategoryHolder: {
    flex: 1,
  },
  categoryHolder: {
    elevation: responsive(10),
    BarIndicator: AppColor.white,
    borderRadius: responsive(5),
    marginVertical: responsive(5),
    overflow: 'hidden',
  },
  categoryNameHolder: {
    borderWidth: 2,
    position: 'absolute',
    backgroundColor: AppColor.white,
    borderColor: AppColor.white,
    borderRadius: responsive(5),
    width: '50%',
    elevation: responsive(10),
    top: '40%',
    left: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsive(20),
  },
  text: {
    padding: responsive(10),
    fontFamily: 'NotoSans-Medium',
    color: AppColor.black,
    fontSize: responsive(18),
  },
});
