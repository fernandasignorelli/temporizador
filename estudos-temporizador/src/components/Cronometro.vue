<template>
  <section>
    <font-awesome-icon :icon="['fa', 'clock']" class="mr-2 text-[var(--color-purple-300)]"/>
    <strong class="text-sm font-semibold text-[var(--color-purple-300)]">
      {{ tempoDecorrido }}
    </strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cronometro',
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0
    }
  },
  computed: {
    tempoDecorrido(): string {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8)
    }
  }
})
</script>
