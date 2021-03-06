import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import baseType from './views/baseType.vue';
import declarations from './views/declarations.vue';
import interfaces from './views/interface.vue';
import classT from './views/classT.vue';
import generic from './views/generic.vue';
import assertions from './views/assertions.vue';
import componentst from './views/componentst.vue';
import recursive from './views/recursive.vue';
import Promises from './views/Promise.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: '/baseType',
      name: 'baseType',
      component: baseType,
    }, {
      path: '/declarations',
      name: 'declarations',
      component: declarations,
    }, {
      path: '/interface',
      name: 'interface',
      component: interfaces,
    }, {
      path: '/classT',
      name: 'classT',
      component: classT,
    }, {
      path: '/generic',
      name: 'generic',
      component: generic,
    }, {
      path: '/assertions',
      name: 'assertions',
      component: assertions,
    }, {
      path: '/componentst',
      name: 'componentst',
      component: componentst,
    }, {
      path: '/recursive',
      name: 'recursive',
      component: recursive,
    }, {
      path: '/Promises',
      name: 'Promises',
      component: Promises,
    },
  ],
});
