import { createApp } from 'vue';

import PrimeVue from 'primevue/config';
import InputSwitch from 'primevue/inputswitch';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Card from 'primevue/card';
import App from './App.vue';
import store from './store/store';

import 'primevue/resources/themes/arya-purple/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App); // icons

// components
app.use(PrimeVue, { ripple: true });

app.component('InputSwitch', InputSwitch);
app.component('Button', Button);
app.component('Card', Card);
app.component('Dropdown', Dropdown);
app.component('Dialog', Dialog);

app.use(store);
app.mount('#app');
