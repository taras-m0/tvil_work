/**
 * Created by ttt on 28.10.2017.
 */
import Vue from 'vue/dist/vue';
import Vuex from 'vuex';
import api from './api';

Vue.use(Vuex);

export { Vue, Vuex };

const hotels = [];
if(window.localStorage){
    if(Array.isArray( JSON.parse(localStorage.getItem('hotels')) )){
        hotels.concat( JSON.parse(localStorage.getItem('hotels')) );
    }
}

const store = new Vuex.Store({
    state: {
        hotels: hotels
    },
    mutations: {
        setHotels: (state, hotels) => {
            state.hotels = hotels;
            if (window.localStorage) {
                localStorage.setItem('hotels', JSON.stringify(hotels));
            }
        }
    },
    getters: {
        hotels: ( state ) => ( state.hotels )
    }
});

export default store;

api.hotels().then(function (response){
    store.commit('setHotels', response );
});