import {APP_BANNER, BEST_SELLER, CHANGE_PASSWORD, FORGETPASSWORD_EMAIL, PRODUCT_CATEGORY, PRODUCT_LIST, SUBSCRIBE_EMAIL, VALIDATE_LOGIN} from './API_SERVICES';

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

// ForgetPassword Email
export const forgetPassword_Email = async data => {
  try {
    const response = await FORGETPASSWORD_EMAIL(data);
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

// Change Password
export const change_password = async data => {
  try {
    const response = await CHANGE_PASSWORD(data);
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

// App Banner
export const app_banner = async data => {
  try {
    const response = await APP_BANNER(data);
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

// Best Seller
export const best_seller = async data => {
  try {
    const response = await BEST_SELLER(data);
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


