<template>
  <main class="flex" :class="{ 'bg-[#2b2d42]': modoEscuroAtivo, 'bg-white text-black': !modoEscuroAtivo }">
    <BarraLateral @aoTemaAlterado="trocarTema" />

    <div class="flex w-3/4 items-center justify-center">
      <div
        class="bg-[--color-purple-200] border border-[--color-purple-300] rounded-md p-10 h-fit w-auto gap-4 flex flex-col mx-auto">
        <Formulario @aoSalvarTarefa="salvarTarefa" />
        <div class="lista space-y-4">
          <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
          <Box v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
          </Box>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from '@/components/BarraLateral.vue'
import Formulario from '@/components/Formulario.vue'
import Tarefa from '@/components/Tarefa.vue'
import Box from '@/components/Box.vue'
import type { ITarefa } from '@/shared/types/ITarefa'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
    Box
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>