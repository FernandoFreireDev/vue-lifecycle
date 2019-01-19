<template>
  <div>
    <button class="btn btn-primary" @click="criaNovoJogo">Novo jogo</button>
    <v-placar :time-casa="timeCasa" :time-fora="timeFora" ref="vPlacar"></v-placar>
  </div>
</template>


<script>
export default {
  inject: ["timesColecao"],
  data() {
    return {
      times: this.timesColecao,
      timeCasa: null,
      timeFora: null
    };
  },
  methods: {
    criaNovoJogo() {
      var indiceCasa = Math.floor(Math.random() * 20),
        indiceFora = Math.floor(Math.random() * 20);

      this.timeCasa = this.times[indiceCasa];
      this.timeFora = this.times[indiceFora];
      var modal = this.$refs.vPlacar;
      modal.showModal();
    }
  }
};
</script>
