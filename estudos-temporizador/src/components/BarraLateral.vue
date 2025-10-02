<template>
  <header class="flex flex-col justify-start p-10 h-screen w-[280px] text-center bg-[--color-purple-300] text-white">
    <img :src="gatoIcon" alt="Gatinho lendo" class="mx-auto w-28 h-28 object-contain" />

    <button @click="alterarTema"
      class="mt-6 px-4 py-2 bg-white text-[--color-purple-300] font-semibold rounded shadow hover:bg-[--color-purple-200] transition">
      {{ textoBotao }}
    </button>

    <nav>
      <ul class="flex flex-col gap-4 items-start mt-4">
        <li class="font-semibold hover:text-[--color-purple-200]">
          <router-link to="/"><font-awesome-icon :icon="['fas', 'home']" />
            Home</router-link>
        </li>
        <li class="font-semibold hover:text-[--color-purple-200]">
          <router-link to="/Projetos"><font-awesome-icon :icon="['fas', 'folder']" />
            Projeto</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gatoIcon from '@/public/icone-gato-tarefa.png'

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuroAtivo: false,
      gatoIcon
    }
  },
  computed: {
    textoBotao() {
      return this.modoEscuroAtivo ? 'Desativar modo escuro' : 'Ativar modo escuro'
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
    }
  }
})
</script>
