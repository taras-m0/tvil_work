import store, { Vue, Vuex } from './store';
import VueRouter from 'vue-router';
import App from './App.vue';
import Hotel from './Hotel';

Vue.use(VueRouter);

const storeCopy = store;

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', name: 'home', component: App},
        {path: '/hotel/:id', name: 'hotel', component: Hotel,
            beforeEnter: (to, from, next) => {
                // Фиксация выбора отеля
                storeCopy.dispatch( 'selectHotel', to.params.id);
                next();
            }
        }
    ]
});


new Vue({
    store,
    router,
    template: `<router-view class="view"></router-view>`
}).$mount('#app');
