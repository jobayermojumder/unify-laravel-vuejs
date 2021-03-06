require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import Meta from "vue-meta";
Vue.use(Meta);
Vue.use(VueRouter);

const Home = require('./components/HomeComponent.vue');
const About = require('./components/AboutComponent.vue');
const Products = require('./components/ProductsComponent.vue');
const Service = require('./components/ServiceComponent.vue');
const News = require('./components/NewsComponent.vue');
const Contact = require('./components/ContactusComponent.vue');

Vue.component('header-component', require('./components/include/HeaderComponent.vue'));
Vue.component('footer-component', require('./components/include/FooterComponent.vue'));

const routes = [
    {
        path: '/',
        component: Home, 
    },
    {
        path: '/about',
        component: About, 
    },
    {
        path: '/products',
        component: Products, 
    },
    {
        path: '/service',
        component: Service, 
    },
    {
        path: '/newsevents',
        component: News, 
    },
    {
        path: '/contactus',
        component: Contact, 
    },
    
];

const router = new VueRouter({
    routes,
});

const app = new Vue({
    el: '#app',
    router,
});
