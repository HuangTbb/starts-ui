<demo>
常规用法
</demo>
<template>
  <Select v-model:initial="defaultValue" :values="['Jack', 'Lucy', 'Jam']"/>
</template>
<script lang="ts">
import Select from '../../lib/Select.vue'
import {ref} from 'vue';
export default {
  components: {Select},
  setup(){
    const defaultValue = ref('Jack')
    return {defaultValue}
  }
}
</script>