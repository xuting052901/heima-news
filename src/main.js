import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./css/common.less"
import "./css/iconfont.less"
import "lib-flexible"
import myheader from "./component/myheader.vue"
import mybotton from "./component/my-botton.vue"
import mylogo from "./component/my-logo.vue"
Vue.component("myheader",myheader)
Vue.component("mybotton",mybotton)
Vue.component("mylogo",mylogo)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
