import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import '@/assets/styles/style.scss';

if (process.env.NODE_ENV === 'development') {
  require('@/mocks/_mockSetup');
}

createApp(App).use(createPinia()).use(router).mount('#app');
