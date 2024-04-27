import axios from 'axios';

const USER_API_BASE_URL = "http://89.117.109.48:8080/v1/app/";

class AppService {

    getApps(userId) {
        return axios.get(USER_API_BASE_URL + userId);
    }

    createApp(app) {
        return axios.post(USER_API_BASE_URL, app);
    }

    updateApp(app) {
        return axios.put(USER_API_BASE_URL, app);
    }

    /*getUserByName(name, pass) {
        return axios.get(USER_API_BASE_URL + 'check?name=' + name + '&pass=' + pass);
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + userId);
    }*/

    deleteApp(appId) {
        return axios.delete(USER_API_BASE_URL + appId);
    }
}

export default new AppService()