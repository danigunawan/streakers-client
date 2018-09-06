import { BASE_URL} from "./config";
import axios from 'axios';

const Activities = {
// 👇 this is a SAMPLE FETCH REQUEST
  // fetch(`${BASE_URL}/activities/`, {
  //   method: "GET",
  //   headers: {
  //     'X-User-Email': localStorage.email,
  //     'X-User-Token': localStorage.accessToken
  //   },
  // })
  // .then(console.log("from activities-request", res));
  // .then(res => res.json());

  all() {
    return axios({
      method: 'GET',
      url: `${BASE_URL}/activities/`,
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
  },

  // this 👇 is the parameter we define and when called will receive an arguement
  create(params) {
    return axios({
      method: 'POST',
      url: `${BASE_URL}/activities/`,
      data: {
        title: params
      },
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
  },

  edit(id, title) {
    return axios({
      method: 'PUT',
      url: `${BASE_URL}/activities/${id}`,
      data: {
        activity: title
      },
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
  },

  // DELETE
  delete(id) {
    return axios({
      method: 'DELETE',
      url: `${BASE_URL}/activities/${id}`,
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
  }
};

export default Activities;
