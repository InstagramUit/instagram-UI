import api from "../services/api.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authenticationContext = {
  login: async (data) => {
    const response = api.post("/login", data);
    return response;
  },
  signUp :async(data)=>{
    const response = api.post('/sign-up', data);
    return response;
  },
  getInfoUser:async ()=>{
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.get('/users');
    return response;
  },
  getInfoAnotherUser:async(user_id)=>{
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.get(`/users/another/${user_id}`);
    return response;
  },
  updateInfoUser:async(data)=>{
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.put('/users',data);
    return response;
  },
  autoSuggest:async()=>{
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.get('/users/auto-suggest');
    return response;
  },
  search:async (data)=>{
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.get('/search',data);
    return response;
  },
};
