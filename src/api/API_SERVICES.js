import axios from 'axios';

export const serverAddress = 'https://khadiapi.atomax.in/api';

export const VALIDATE_LOGIN = async data => {
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

// Product List
export const PRODUCT_LIST = async data => {
  const url = `${serverAddress}/product_list`;
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

// Subscribe News Letter https://khadiapi.atomax.in/api/send_email
export const SUBSCRIBE_EMAIL = async data => {
  const url = `${serverAddress}/send_email`;
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

// Forget Password Email
export const FORGETPASSWORD_EMAIL = async data => {
  const url = `${serverAddress}/PasswordForget`;
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


//Change Password 3rd Steps https://khadiapi.atomax.in/api/Change_password
export const CHANGE_PASSWORD = async data => {
  const url = `${serverAddress}/Change_password`;
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