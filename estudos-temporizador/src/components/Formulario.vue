<template>
  <div class="mx-auto w-full p-6 rounded-md shadow-md bg-[var(--bg-primario)] text-[var(--texto-primario)]">
    <div class="flex flex-col lg:flex-row gap-4">
      <div class="flex-1" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input
          type="text"
          class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-[--color-purple-300]"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="w-full lg:w-auto">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Temporizador from './Temporizador.vue'

export default defineComponent({
  name: "Formulário",
  emits: ['aoSalvarTarefa'],
  components: {
    Temporizador
  },
  data() {
    return {
      descricao: ''
    }
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao
      })
      this.descricao = ''
    }
  }
})
</script>
