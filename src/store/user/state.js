import { getToken } from "@/utils/auth";

export const state = {
  user: {
    id: "",
    name: "",
    last_name: "",
    email: "",
    phone: "",
    token: getToken(),
    avatar: process.env.VUE_APP_BASE_URL + "images/avatar.png"
  },
  login: false
};
