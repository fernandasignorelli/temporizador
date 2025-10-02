// shared/stores/index.ts
import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import type { InjectionKey } from 'vue'
import type IProjeto from '../types/IProjeto'

export interface Estado {
  projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol('vuex-key')

export const store = createStore<Estado>({
  state: {
    projetos: [],
  },
  mutations: {
    'ADICIONA_PROJETO'(state, nomeDoProjeto: string){
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProjeto
      state.projetos.push(projeto)
    }
  }
})

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}
