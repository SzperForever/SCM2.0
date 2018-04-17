import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import HomePage from "./components/mainContent/homePage/homePage";
import AppCenter from "./components/mainContent/appCenter/appCenter"
import DocumentCenter from "./components/mainContent/documentCenter/documentCenter"

require('es6-promise').polyfill();
var axios = require('axios');
Vue.prototype.$http = axios.create({
  baseURL: 'http://123.207.49.64:8080/SCM'
  // baseURL: 'http://127.0.0.1:8080'
  // baseURL: 'http://cnshah0mrosql01:8080/SCM'
});


Vue.use(VueRouter);
Vue.use(iView);


const routes = [
  {path: "/", component: HomePage},
  {path: '/AppCenter', component: AppCenter},
  {path: '/DocumentCenter', component: DocumentCenter}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
