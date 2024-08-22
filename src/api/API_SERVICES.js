import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const serverAddress = 'https://khadiapi.atomax.in/api';

export const VALIDATE_LOGIN = async data => {
  console.log(data, 'Line 7 in API Services');
  const url = `${serverAddress}/login`;
  const response = await axios
    .post(url, data, {
      headers: {
        keys: 'khadi@123',
      },
    })
    .then(res => {
      return res?.data;
    })
    .catch(error => error?.response?.data);
  return response;
};

// Product Category
export const PRODUCT_CATEGORY = async data => {
  console.log(data, 'Line 7 in API Services');
  const url = `${serverAddress}/category_list_final`;
  const response = await axios
    .post(url, data, {
      headers: {
        keys: 'khadi@123',
      },
    })
    .then(res => {
      return res?.data;
    })
    .catch(error => error?.response?.data);
  return response;
};
