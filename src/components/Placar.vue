<template>
  <v-modal ref="vModalPlacar">
    <h5 slot="modal-header" class="modal-title">Novo Jogo</h5>
    <div slot="modal-body" class="form-inline">
      <input type="text" class="form-control col-md-1" v-model="golsCasa">
      <v-clube :time="timeCasa" invertido="true" v-if="timeCasa"></v-clube>
      <span>X</span>
      <v-clube :time="timeFora" v-if="timeFora"></v-clube>
      <input type="text" class="form-control col-md-1" v-model="golsFora">
    </div>
    <div slot="modal-footer">
      <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" @click="fimJogo">Fim de jogo</button>
    </div>
  </v-modal>
</template>

<script>
export default {
  props: ["timeCasa", "timeFora"],
  data() {
    return {
      golsCasa: 0,
      golsFora: 0
    };
  },
  methods: {
    showModal() {
      this.getModal().show();
    },
    closeModal() {
      this.getModal().close();
    },
    getModal() {
      return this.$refs.vModalPlacar;
    },
    fimJogo() {
      var golsMarcados = parseInt(this.golsCasa);
      var golsSofridos = parseInt(this.golsFora);
      this.timeCasa.fimJogo(this.timeFora, golsMarcados, golsSofridos);
      this.golsCasa = 0;
      this.golsFora = 0;
      this.closeModal();
    }
  }
};
</script>
