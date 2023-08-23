import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8090/api', // URL base da sua API
  timeout: 10000 // Timeout da requisição (opcional)
});

export default apiClient;
