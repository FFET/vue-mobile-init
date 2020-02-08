import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const instance = axios.create({
  // baseURL: "http://api.shanghaim.net/mock/28/api/",
  baseURL: "",
  timeout: 100000
  // headers: { "X-Custom-Header": "foobar" }
});

const request = async ({
  url,
  method = "get",
  data = {}
  // headers = { "Content-Type": "application/json" },
  // loading = false,
  // timeout = 30000
}) => {
  NProgress.start();
  const response = await instance({
    url,
    method,
    data
  });

  const responseData = { ...response.data };
  NProgress.done();
  if (+responseData.code === 0) {
    responseData.state = true;
  } else {
    alert(responseData.msg);
  }
  return responseData;
};

function get(url) {
  return request({ url });
}

export default { request, get };
