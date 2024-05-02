import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:7500",
});

export default $axios;
