import Vue from 'vue'
import App from './App.vue'
//引入vuex
import store from './store'
//引入vuerouter
import VueRouter from "vue-router";
//引入路由器
import router from "./router";

Vue.config.productionTip = false
Vue.use(VueRouter)



new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
  store:store,
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
	},
})
