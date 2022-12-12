import api from "../services/api.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const followContext = {
  createFollow: async (data) => {
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.post(`/users/follow`, data);
    return response;
  },
};
