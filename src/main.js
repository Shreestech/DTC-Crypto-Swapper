import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Toaster from "@incuca/vue3-toaster";
import './index.css'

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(Toaster)
    .mount('#app')
