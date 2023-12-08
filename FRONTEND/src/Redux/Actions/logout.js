import { LOGOUT_USER } from "../../utils/const";

export const logoutUser = () => {
    return {
      type: LOGOUT_USER,
    };
  };