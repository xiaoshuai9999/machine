import axios from 'axios';
import {Loading, Notification} from 'element-ui'
import storage from "./localStorage";
import {arrIsEmpty} from "./util";
let noneLoadingFlag = false;

const http = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  proxy: true,
  timeout: 50000 // request timeout
});
// todo
// 配置head,拦截器等
let loadingInstance = {};
http.interceptors.request.use(config => {
  loadingInstance = Loading.service({"background": "rgba(0, 0, 0, 0.8)"});
  let user = storage.get('user');
  if (!arrIsEmpty(user)) {
    config.headers.common['userId'] = user['user_id'];
  }
  return config;
}, error => {
  if(!noneLoadingFlag){
    loadingInstance.close();
  }
  return Promise.reject(error);
});
http.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      window.location.href = "login";
    }
    return Promise.reject(error);
  }
)
;
http.interceptors.response.use(data => {
  if(!noneLoadingFlag){
    loadingInstance.close();
  }
  return data;
}, error => {
  if(!noneLoadingFlag){
    loadingInstance.close();
  }
  return Promise.reject(error);
});


export default http;
