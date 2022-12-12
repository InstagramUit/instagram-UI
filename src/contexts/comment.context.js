import api from "../services/api.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const commentContext = {
  createCommentPost: async (data) => {
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.post(`/comments`, data);
    return response;
  },
};
