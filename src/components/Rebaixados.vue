<template>
  <div>
    <h3>Times rebaixados</h3>
    <ul>
      <li v-for="(time, indice) in timesRebaixados" v-bind:key="indice">
        <v-clube :time="time"></v-clube>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["times"],
  computed: {
    timesRebaixados() {
      return this.times.slice(16, 20);
    }
  }
};
</script>
