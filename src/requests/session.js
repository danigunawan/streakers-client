import { BASE_URL } from "./config";
import axios from "axios";

const Session = {

  create(params) {
    return axios.post(`${BASE_URL}/sessions`, params )
  },

  newUser(params) {
    return axios.post(`${BASE_URL}/users`, { user: params })
  },

  signOut() {
    return axios({
      method: 'DELETE',
      url: `${BASE_URL}/sessions`,
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
  }

};

export default Session;
