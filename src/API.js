import axios from 'axios';

const authToken = {
  set(accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export { authToken };
