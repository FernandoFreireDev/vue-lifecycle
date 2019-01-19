<template>
  <div class="container">
    <v-header></v-header>
    <div class="row form-group">
      <div class="col-md-12">
        <v-novo-jogo></v-novo-jogo>
      </div>
    </div>
    <div class="row form-group">
      <div class="col-md-12">
        <v-tabela></v-tabela>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeCasa: null,
      timeFora: null,
      visao: "tabela"
    };
  },
  methods: {
    // showTabela(event) {
    //   this.visao = "tabela";
    // },
    // showPlacar({ timeCasa, timeFora }) {
    //   this.timeCasa = timeCasa;
    //   this.timeFora = timeFora;
    //   this.visao = "placar";
    // }
  }
};
</script>