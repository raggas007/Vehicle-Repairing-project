import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:6000",
});

export default $axios;
