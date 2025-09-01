<template>
  <Box>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="md:w-7/12 w-full">
        {{ tarefa.descricao || 'Tarefa sem descrição' }}
      </div>
      <div class="md:w-5/12 w-full text-right">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "@/components/Cronometro.vue";
import type { ITarefa } from '@/shared/types/ITarefa';
import Box from '@/components/Box.vue';

export default defineComponent({
  name: "Tarefa",
  components: {
    Cronometro,
    Box
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
});
</script>
