import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import Homepage from './components/Homepage.vue';
import Personajes from './components/Personajes';
import Arcos from './components/Arcos.vue';
import Future from './components/Future.vue';
import Lore from './components/Lore.vue';
import locale from 'element-ui/lib/locale/lang/en';

Vue.use(VueRouter)
Vue.use(ElementUI, {locale})

const router = new VueRouter({
  mode: "history",
  routes: [{
      path: '/',
      component: Homepage,
      name: 'Homepage'
    },
    {
      path: '/personajes/:id',
      component: Personajes,
      name: 'Personajes'
    },
    {
      path: '/arcos/:id',
      component: Arcos,
      name: 'Arcos'
    },
    {
      path: '/future',
      component: Future,
      name: 'Future'
    },
    {
      path: '/lore/:id',
      component: Lore,
      name: 'Lore'
    },
  ]
})

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')