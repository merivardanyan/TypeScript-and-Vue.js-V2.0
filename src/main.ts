import { createApp } from 'vue';
import App from './App.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

// Import your routes here
import routes from './routes/index.ts';

const app = createApp(App);
app.use(routes); 
app.use(VueQueryPlugin);
app.mount('#app');
