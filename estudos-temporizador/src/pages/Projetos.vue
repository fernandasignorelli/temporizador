<template>
  <section class="projetos">
    <h1>Projetos</h1>

    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do projeto</label>
        <input type="text" id="nomeDoProjeto" v-model="nomeDoProjeto" class="input" />
      </div>

      <div class="field">
        <button type="submit" class="button">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { IProjeto } from '@/components/interface/IProjeto'

export default defineComponent({
  name: 'Projetos',

  data() {
    return {
      nomeDoProjeto: '',
      projetos: [] as IProjeto[],
    }
  },

  methods: {
    salvar() {
      const projeto: IProjeto = {
        nome: this.nomeDoProjeto,
        id: new Date().toISOString(),
      }

      this.projetos.push(projeto)
      this.nomeDoProjeto = ''
    },
  },
})
</script>

<!-- Quando o usuário clicar no botão de salvar o formulário, ele irá pegar o nome do projeto e
 criar um projeto novo, colocar um id, irá adicionar em nossa lista e em seguida irá limpar o
 nosso input. -->
