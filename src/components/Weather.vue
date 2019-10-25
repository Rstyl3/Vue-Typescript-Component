<template>
  <div class="weather">
    <h1>Weather is :</h1>
    <ul>
      <li v-for="(value, key) in data" :key="value.id">{{ key | capitalize }}: {{ value | dateFormat(key, value) }}</li>
    </ul>
    <font-awesome-icon size="6x" :icon="switchIcons(data.summary)" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Weather',
  props: ['data'],
  methods: {
    switchIcons(summary: any) {
      switch (summary) {
        case 'Cloudy':
          return 'cloud';
        case 'Snowy':
          return 'cloud-meatball';
        case 'Scattered Showers':
          return 'cloud-showers-heavy';
        case 'Sunny':
          return 'sun';
        case 'Windy':
          return 'wind';
        case 'Freezing':
          return 'snowflake';
        default:
          return '';
      }
    },
  },
  filters: {
    dateFormat(value: any, key: any) {
      if (key == 'date') {
        return new Date(value).toLocaleDateString();
      }
      if (key == 'temperatureC' || key == 'temperatureF') {
        return value + '°';
      } else {
        return value;
      }
    },
    capitalize(value: any) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
});
</script>

<style scoped>
.weather {
  padding: 10px;
  width: 300px;
  height: 350px;
  margin: 0 auto;
  background-color: #55d4ff;
  border-radius: 10px;
}
.weather ul {
  list-style: none;
  padding: 0;
}
.fa-sun{
  color: #ffe717;
}
.fa-snowflake,.fa-cloud,.fa-cloud-meatball{ 
 color: #ffffff;
}

</style>