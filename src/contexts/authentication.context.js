import api from "../services/api.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authenticationContext = {
  login: async () => {
    const response = api.post("/login", data);
    return response;
  },
  signUp :async()=>{
    const response = api.post('/sign-up', data);
    return response;
  },
};
