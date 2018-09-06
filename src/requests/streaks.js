import { BASE_URL} from "./config";
import axios from 'axios';

const Streaks = {

  new(activityId) {
    return axios({
      method: 'POST',
      url: `${BASE_URL}/activities/${activityId}/streaks`,
      // data: { },
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
  },

  renew(activityId, streakId, streak) {
    return axios({
      method: 'PUT',
      url: `${BASE_URL}/activities/${activityId}/streaks/${streakId}`,
      data: {
        streak: streak
      },
      headers: {
        'X-User-Email': localStorage.email,
        'X-User-Token': localStorage.accessToken
      }
    })
  }

};

export default Streaks;
