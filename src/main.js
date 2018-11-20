// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store.js"
import $ from 'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import fancyBox from 'vue-fancybox';
// Vue.use(fancyBox);

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
Vue.use(ElementUI);
axios.defaults.baseURL = "http://47.100.174.141:3000";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
components: { App },
template: '<App/>',
  store: store,
})
