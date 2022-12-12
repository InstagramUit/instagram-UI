import api from "../services/api.service";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const postContext = {
  getPosts: async () => {
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.get("/posts");
    return response;
  },
  setLikePost: async (id_post, isLike) => {
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.put(`/posts/like/${id_post}`, { isLike });
    return response;
  },
  createPost:async (data)=>{
    const value = await AsyncStorage.getItem("access-token");
    api.defaults.headers.Authorization = `Bearer ${value}`;
    const response = api.post(`/posts`,  data);
    return response;
  }
};
