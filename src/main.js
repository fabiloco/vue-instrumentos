import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

import './assets/css/styles.css';
import './assets/css/shoping_cart.css';
import './assets/css/animation.css';
import './assets/tailwind.css';

createApp(App).use(VueSweetalert2).use(store).use(router).mount('#app');
