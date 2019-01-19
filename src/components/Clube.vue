<template>
  <div style="display:flex; flex-direction: row;">
    <img
      :src="time.escudo"
      :alt="'Escudo '+time.nome"
      class="escudo"
      :style="{'order': invertido == 'true' ? '2' : '1'}"
    >
    <span :style="{'order': invertido == 'true' ? '1' : '2'}">{{ time.nome | ucwords }}</span>
  </div>
</template>

<script>
export default {
  props: ["time", "invertido"]
};
</script>

<style>
.escudo {
  width: 30px;
  height: 30px;
}
</style>
