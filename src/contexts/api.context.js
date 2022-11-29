import api from '../services/api.service';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class ApiContext {
    async login(data) {
        const response = api.post('/login', data);
        return response;
    }
    async signUp(data){
        const response = api.post('/sign-up', data);
        return response;
    }
    async getPosts(){
        const value = await AsyncStorage.getItem('access-token')
        console.log(value);
        api.defaults.headers.Authorization =`Bearer ${value}`
        const response = api.get('/posts');
        return response;
    }
 
}