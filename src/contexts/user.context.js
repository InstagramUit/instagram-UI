import api from "../services/api.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userContext = {
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
    const response = api.get('/users/search?name='+data);
    return response;
  },
};
