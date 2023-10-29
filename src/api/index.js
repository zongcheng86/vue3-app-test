import axios from "axios";

axios.defaults.baseURL = "http://49.235.128.49:3012/";
axios.interceptors.request.use((config) => config);
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default axios;
