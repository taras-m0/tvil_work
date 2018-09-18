<template>
  <div id="app">
    <label>Минимальная цена: <input v-model="minPrice" /></label>

    <ul>
      <li v-for="hotel in hotels">
        <h3>{{ hotel.name }}.
          <span v-if="hotel.selected">Текущий выбор</span>
        </h3>
        <div>Цена: {{ hotel.price }} <router-link :to="'/hotel/' + hotel.id ">Выбрать</router-link></div>
      </li>
    </ul>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        data(){
            return {
                minPrice: 0
            }
        },

        computed: {
            hotels(){
                const minPrice = this.minPrice;
                return this.$store.getters.hotels.filter( hotel => ( hotel.price >= minPrice ));
            }
        },

        name: 'app'
    }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: block;
    list-style: none;
    padding: 10px;
  }

  h3 {
    margin: 10px 0 0;
  }

  span {
    color: red;
    font-size: .7em;
    vertical-align: top;
  }

  a {
    display: inline-block;
    padding: .2em 1em;
    background-color: #ddf;
    border: 1px solid #aaf;
    text-decoration: none;
  }

  input {
    text-align: center;
    width: 2em;
  }
</style>
