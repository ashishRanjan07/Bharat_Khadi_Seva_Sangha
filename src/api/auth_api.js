import { VALIDATE_LOGIN } from "./API_SERVICES";

export const validateLogin = async data => {
    try {
        console.log(data,"Line 5 Auth API");
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