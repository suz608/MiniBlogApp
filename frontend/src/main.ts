import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';  
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'; 

const app = createApp(App);
app.use(router);
app.use(Toast);
app.use(store); 
app.mount('#app')
