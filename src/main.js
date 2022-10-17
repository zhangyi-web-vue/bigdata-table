import Vue from 'vue'
import App from './App.vue'
// 引入样式
import "vue-easytable/libs/theme-default/index.css";
// 引入组件库
import VueEasytable from "vue-easytable";

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VueEasytable);
Vue.use(VXETable);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
