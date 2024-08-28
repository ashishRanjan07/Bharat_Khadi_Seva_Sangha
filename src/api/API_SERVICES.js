import axios from 'axios';

export const serverAddress = 'https://khadiapi.atomax.in/api';
// export const serverAddress = 'https://app.khadindia.com/api';

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

// Banner API https://khadiapi.atomax.in/api/app_banner
export const APP_BANNER = async data => {
  const url = `${serverAddress}/app_banner`;
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

// Best Seller : - https://khadiapi.atomax.in/api/best_seller
export const BEST_SELLER = async data => {
  const url = `${serverAddress}/best_seller`;
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