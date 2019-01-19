<template>
  <div class="row form-group">
    <h1>{{ titulo }}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      titulo: 'Campeonato Brasileiro - Série A - 2018'
    }
  },
  beforeCreate() {
    console.time('beforeCreate')
    console.log('beforeCreate')
    console.timeEnd('beforeCreate')
  },
  created() {
    console.time('created')
    console.log('created')
    console.timeEnd('created')
  },
  beforeMount() {
    console.time('beforeMount')
    console.log('beforeMount')
    console.timeEnd('beforeMount')
  },
  mounted() {
    console.time('mounted')
    console.log('mounted')
    console.timeEnd('mounted')
  },
  beforeUpdate() {
    console.time('beforeUpdate')
    console.log('beforeUpdate')
    console.timeEnd('beforeUpdate')
  },
  updated() {
    console.time('updated')
    console.log('updated')
    console.timeEnd('updated')
  },
  beforeDestroy() {
    console.time('beforeDestroy')
    console.log('beforeDestroy')
    console.timeEnd('beforeDestroy')
  },
  destroyed() {
    console.time('destroyed')
    console.log('destroyed')
    console.timeEnd('destroyed')
  },
};
</script>