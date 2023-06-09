/*
 * @Author: jingmin-kuang
 * @Date: 2023-03-11 13:11:15
 * @LastEditTime: 2023-05-31 18:02:51
 * @LastEditors: jingmin-kuang
 * @Description: 
 */
import Vue from "vue";
import App from "./App.vue";



import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import kui from 'kui-v2'
import 'kui-v2/lib/kui-v2.css'
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(kui);

import router from "./router";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
