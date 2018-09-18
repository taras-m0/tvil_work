<template>
    <div>
        Спасибо за использование нашего сервиса. Ваше бронирование в {{ hotel.name }} подтверждено."<br/>
        <router-link to="/">Список</router-link>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        computed: {
            id(){
                return this.$route.params.id
            },
            hotel(){
                return this.$store.getters.hotelById( this.id )
            }
        }

    }
</script>

<style scoped>
    div {
        padding: 20px;
        text-align: center;
    };
</style>