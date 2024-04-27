import axios from 'axios';

const USER_API_BASE_URL = "http://89.117.109.48:8080/v1/rol/";

class RolService {

    getRols() {
        return axios.get(USER_API_BASE_URL);
    }

    createRol(rol) {
        return axios.post(USER_API_BASE_URL, rol);
    }

    getRolById(rolId) {
        return axios.get(USER_API_BASE_URL + rolId);
    }

    updateRol(rol) {
        return axios.put(USER_API_BASE_URL, rol);
    }

    deleteRol(rolId) {
        return axios.delete(USER_API_BASE_URL + rolId);
    }
}

export default new RolService()