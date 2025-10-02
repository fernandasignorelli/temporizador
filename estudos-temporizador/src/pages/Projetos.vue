<template>
  <div class="flex min-h-screen">
    <!-- Barra lateral fixa -->
    <BarraLateral />

    <!-- Conteúdo principal -->
    <section class="projetos px-4 py-8 max-w-4xl w-full mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center">Projetos</h1>

      <form @submit.prevent="salvar" class="space-y-6">
        <div class="flex flex-col">
          <label for="nomeDoProjeto" class="mb-2 font-medium text-gray-700"
            >Nome do Projeto</label
          >
          <input
            type="text"
            id="nomeDoProjeto"
            v-model="nomeDoProjeto"
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Salvar
          </button>
        </div>
      </form>

      <table
        class="min-w-full mt-8 divide-y divide-gray-200 border border-gray-300 shadow-sm rounded-md"
      >
        <thead class="bg-gray-100">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-700">
              ID
            </th>
            <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-700">
              Nome
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="projeto in projetos" :key="projeto.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 text-sm text-gray-800">{{ projeto.id }}</td>
            <td class="px-6 py-4 text-sm text-gray-800">{{ projeto.nome }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import BarraLateral from "@/components/BarraLateral.vue";
import { useStore } from "@/shared/stores";

export default defineComponent({
  name: "Projetos",
  components: {
    BarraLateral,
  },

  data() {
    return {
      nomeDoProjeto: "",
    };
  },

  methods: {
    salvar() {
      const projeto = {
        id: new Date().toISOString(),
        nome: this.nomeDoProjeto,
      };

      this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto);
      this.nomeDoProjeto = "";
    },
  },

  setup() {
    const store = useStore();
    return {
      store,
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

// Quando o usuario clicar em "salvar" ele vai pegar o nome do projeto, criar um projeto
novo, criar um id, adicionar na // nossa lista e em seguida irá limpar o input.
