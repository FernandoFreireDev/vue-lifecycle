<template>
  <div>
    <h3>Times classificados para libertadores</h3>
    <ul>
      <li v-for="(time, indice) in timesLibertadores" v-bind:key="indice">
        <v-clube :time="time"></v-clube>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['times'],
  computed: {
    timesLibertadores() {
      return this.times.slice(0, 6);
    }
  }
};
</script>
