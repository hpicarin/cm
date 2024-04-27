import axios from 'axios';

const USER_API_BASE_URL = "http://89.117.109.48:8080/v1/user/";

class UserService {

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserByName(name, pass) {
        return axios.get(USER_API_BASE_URL + 'check?name=' + name + '&pass=' + pass);
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + userId);
    }

    updateUser(user) {
        return axios.put(USER_API_BASE_URL, user);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + userId);
    }
}

export default new UserService()