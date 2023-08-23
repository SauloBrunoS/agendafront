<template>
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        <li v-for="contato in contatos" :key="contato.id">
          {{ contato.nome }} - {{ contato.telefone }} - {{ contato.endereco }} - {{ contato.status }}
          <button @click="excluirContato(contato.id)">Excluir</button>
        </li>
      </ul>
    </div>
</template>
  
<script>
  import apiClient from '@/api'; 
  
  export default {
    props: ['contatos'],
    methods: {
      async excluirContato(id) {
        try {
          await apiClient.delete(`/contatos/${id}`);
          this.$emit('excluir', id);
        } catch (error) {
          console.error('Erro ao excluir contato:', error);
        }
      }
    }
  }
</script>
  
<style>
ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #fff;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

button {
  background-color: #ff5a5f;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>