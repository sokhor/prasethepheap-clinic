
require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)

Vue.component('home', require('./components/pages/home.vue'));


const app = new Vue({
    el: '#app'
});
