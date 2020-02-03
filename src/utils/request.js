import axios from "axios";

const instance = axios.create({
  // baseURL: "http://api.shanghaim.net/mock/28/api/",
  baseURL: "",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

export default instance;
