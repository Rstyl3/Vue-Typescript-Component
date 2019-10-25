<template>
  <div id="app">
    <button @click="hdlGetReport">Get New Weather</button>
    <Weather :data="initialWeather"/>
  </div>
</template>

<script lang="ts">
import weather from './assets/weather';
import { IWeather, Summary } from './assets/types';

import Vue from 'vue';
import Weather from './components/Weather.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Weather,
  },
  data() {
    return {
      weather: weather,
      initialWeather: weather[0]
    };
  },
  methods:{
     hdlGetReport(){
       let randomNumber =Math.floor(Math.random() * 5); 
       this.initialWeather  = weather[randomNumber]
     }
  }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  margin-bottom: 20px;
}
</style>
