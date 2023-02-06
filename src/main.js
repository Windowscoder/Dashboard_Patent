import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import echarts from 'echarts'
Vue.prototype.$echarts = function (el) {
  return echarts.init(el, null, {renderer: 'svg'})
}

new Vue({
  render: h => h(App),
}).$mount('#app')
