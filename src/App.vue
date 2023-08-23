<template>
  <div>
    <ContatoList :contatos="contatos" @excluir = "excluirContato"></ContatoList>
    <NovoContato @adicionar="adicionarContato"></NovoContato>
  </div>
</template>

<script>
import ContatoList from './components/ContatoList.vue';
import NovoContato from './components/NovoContato.vue';
import apiClient from '@/api'; 

export default {
  components: {
    ContatoList,
    NovoContato
  },
  data() {
    return {
      contatos: []
    };
  },
  created() {
    this.carregarContatos();
  },
  methods: {
    async carregarContatos() {
      try {
        const response = await apiClient.get('/contatos');
        this.contatos = response.data;
      } catch (error) {
        console.error('Erro ao carregar contatos:', error);
      }
    },
    adicionarContato(novoContato) {
        this.contatos.push(novoContato); 
    },

    excluirContato(id) {
        this.contatos = this.contatos.filter(contato => contato.id !== id); 
    }
  }
  }
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f8f8;
}
</style>