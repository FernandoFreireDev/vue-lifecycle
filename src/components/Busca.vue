<template>
  <div>
    <div class="form-inline form-group">
      <label>Buscar:</label>
      <input type="text" class="form-control col-md-4" v-model="$parent.busca">
      <button type="button" class="btn btn-danger" @click="$parent.busca = ''">Limpar</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
