import { BASE_URL } from "./config";
import axios from "axios";

const Session = {

  create(params) {
    return axios.post(`${BASE_URL}/sessions`, params )
  },

  newUser(params) {
    return axios.post(`${BASE_URL}/users`, { user: params })
  }

};

export default Session;
