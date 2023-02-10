import api from "../services/api.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const messageContext = {
  getMessage: async () => {
    // const value = await AsyncStorage.getItem("access-token");
    // api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.get("/chat");
    return response;
  },

  createNewMessage: async (id_user, content) => {
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.post(`/chat`, { id_user, content });
    return response;
  },
};
