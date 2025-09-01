<template>
  <div class="flex items-center justify-between gap-4 flex-wrap">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />

    <button class="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded disabled:opacity-50"
      @click="iniciar" :disabled="cronometroRodando">
      <font-awesome-icon :icon="['fas', 'play']" />
      <span class="font-bold">play</span>
    </button>

    <button class="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-800 text-white rounded disabled:opacity-50"
      @click="finalizar" :disabled="!cronometroRodando">
      <font-awesome-icon :icon="['fas', 'stop']" />
      <span class="font-bold">stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from '@/components/Cronometro.vue';

export default defineComponent({
  name: "Temporizador",
  emits: ['aoTemporizadorFinalizado'],
  components: {
    Cronometro
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: null as ReturnType<typeof setInterval> | null,
      cronometroRodando: false
    }
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1
      }, 1000)
    },
    finalizar() {
      this.cronometroRodando = false
      if (this.cronometro !== null) {
        clearInterval(this.cronometro)
      }
      this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
      this.tempoEmSegundos = 0
      this.cronometro = null
    }
  }

});
</script>
