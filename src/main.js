import store, { Vue, Vuex } from './store';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

const Hotel = {
    template: '<div>Hotel {{ $route.params.id }}</div>'
};

const Home = {
    template: '<div>Home</div>'
};

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', name: 'home', component: App},
        {path: '/hotel/:id', name: 'hotel', component: Hotel}
    ]
});


new Vue({
    store,
    router,
    template: `<router-view class="view"></router-view>`
}).$mount('#app');
