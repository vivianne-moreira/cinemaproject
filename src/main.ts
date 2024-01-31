import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HomeApp from './components/HomeApp.vue';

const app = createApp(App);

// Use o VueRouter no aplicativo
app.use(router);

// Registre o componente HomeApp
app.component('HomeApp', HomeApp);

// Monte o aplicativo
app.mount('#app');
