<template>
  <div class="w-full p-4 rounded shadow font-bold mx-auto" :style="estilos">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Box',
  data () {
    return {
      estilos: {
        backgroundColor: '#FAF0CA'
      }
    }
  }
})
</script>
