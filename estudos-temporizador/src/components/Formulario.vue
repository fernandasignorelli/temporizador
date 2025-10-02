<template>
  <div class="mx-auto w-full p-6 rounded-md shadow-md bg-[var(--bg-primario)] text-[var(--texto-primario)]">
    <div class="flex flex-col lg:flex-row gap-4">
      <div class="flex-1" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input
          type="text"
          class="w-[300px] border border-gray-300 rounded px-5 py-2 focus:outline-none focus:ring focus:ring-[--color-purple-300]"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>

      <!-- seletor de projeto -->
      <div class="w-full lg:w-auto">
        <select
          v-model="idProjeto"
          class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-[--color-purple-300]"
        >
          <option disabled value="">Selecione um projeto</option>
          <option v-for="p in projetos" :key="p.id" :value="p.id">
            {{ p.nome }}
          </option>
        </select>
      </div>

      <div class="w-full lg:w-auto">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Temporizador from './Temporizador.vue'
import { useStore } from 'vuex'
import { key } from '@/shared/stores'

export default defineComponent({
  name: 'Formulário',
  emits: ['aoSalvarTarefa'],
  components: { Temporizador },

  data() {
    return {
      descricao: '',
      idProjeto: ''
    }
  },

  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      const projetoSelecionado =
        this.projetos.find((proj: any) => String(proj.id) === String(this.idProjeto)) ?? null

      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
        projeto: projetoSelecionado
      })

      this.descricao = ''
      this.idProjeto = ''
    }
  },

  setup() {
    const store = useStore(key)
    const projetos = computed(() => store.state.projetos)
    return { projetos }
  }
})
</script>
