<template>
  <div>
    <v-busca></v-busca>

    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th v-for="(coluna, indice) in ordem.colunas" v-bind:key="indice">
              <a href @click.prevent="ordenar(indice)">{{ coluna | ucwords }}</a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(time, indice) in timesFiltrados" v-bind:key="indice"
            :class="{'table-success': indice < 4, 'table-warning': indice > 3 && indice < 6, 'table-danger': indice > 15}"
          >
            <td>
              <v-clube :time="time"></v-clube>
            </td>
            <td>{{ time.pontos }}</td>
            <td>{{ time.gm }}</td>
            <td>{{ time.gs }}</td>
            <td>{{ time.saldo }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <v-libertadores :times="timesOrdenados"></v-libertadores>

    <v-rebaixados :times="timesOrdenados"></v-rebaixados>
  </div>
</template>

<script>

import _ from 'lodash'

export default {
  inject: ["timesColecao"],
  data() {
    return {
      busca: "",
      ordem: {
        colunas: ["pontos", "gm", "gs", "saldo"],
        orientacao: ["desc", "desc", "asc", "desc"]
      },
      times: this.timesColecao
    };
  },
  computed: {
    timesOrdenados() {
      return _.orderBy(this.times, this.ordem.colunas, this.ordem.orientacao);
    },
    timesFiltrados() {
      var self = this;
      return _.filter(this.timesOrdenados, function(time) {
        var busca = self.busca.toLowerCase();
        return time.nome.toLowerCase().indexOf(busca) >= 0;
      });
    }
  },
  methods: {
    ordenar(indice) {
      this.$set(
        this.ordem.orientacao,
        indice,
        this.ordem.orientacao[indice] == "desc" ? "asc" : "desc"
      );
    }
  }
};
</script>

<style>
    li{
        display: block;
    }
</style>
