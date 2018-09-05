import { BASE_URL} from "./config";
import axios from 'axios';

const Activities = {
  // method: 'GET',
  // url: 'http://localhost:3001/v1/activities',
  // headers: {
  //   'X-User-Email': localStorage.email,
  //   'X-User-Token': localStorage.accessToken
  // }

  all() {
    return axios({
      method: 'GET',
      url: `${BASE_URL}/activities/`,
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })

    // fetch(`${BASE_URL}/activities/`, {
    //   method: "GET",
    //   headers: {
    //     'X-User-Email': localStorage.email,
    //     'X-User-Token': localStorage.accessToken
    //   },
    // })
    // .then(console.log("from activities-request", res));
    // .then(res => res.json());
  },

  one(id) {
    return fetch(`${BASE_URL}/activities/${id}`, {
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
    .then(res => res.json());
  },

  create(params) {
    return fetch(`${BASE_URL}/activities/`, {
      method: "POST",
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      },
      body: JSON.stringify(params)
    }).then(res => res.json());

  }
};

export default Activities;
