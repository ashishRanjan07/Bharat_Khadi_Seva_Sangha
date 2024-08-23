import {PRODUCT_CATEGORY, PRODUCT_LIST, SUBSCRIBE_EMAIL, VALIDATE_LOGIN} from './API_SERVICES';

// Validate Login
export const validateLogin = async data => {
  try {
    const response = await VALIDATE_LOGIN(data);
    if (!response) {
      return `Can't connect to server`;
    } else if (response?.error === true) {
      return response;
    } else {
      return response;
    }
  } catch (error) {
    return error.message;
  }
};

// Product Category.
export const productCategory = async data => {
  try {
    const response = await PRODUCT_CATEGORY(data);
    if (!response) {
      return `Can't connect to server`;
    } else if (response?.error === true) {
      return response;
    } else {
      return response;
    }
  } catch (error) {
    return error.message;
  }
};

// Product List
export const product_list = async data => {
  try {
    const response = await PRODUCT_LIST(data);
    if (!response) {
      return `Can't connect to server`;
    } else if (response?.error === true) {
      return response;
    } else {
      return response;
    }
  } catch (error) {
    return error.message;
  }
};

// Subscribe Email
export const subscribe_email = async data => {
  try {
    const response = await SUBSCRIBE_EMAIL(data);
    if (!response) {
      return `Can't connect to server`;
    } else if (response?.error === true) {
      return response;
    } else {
      return response;
    }
  } catch (error) {
    return error.message;
  }
};
