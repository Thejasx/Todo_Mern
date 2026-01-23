import axios from 'axios'

const BackendInstance = axios.create({
  baseURL: 'http://localhost:3000/api/todo',
  timeout: 5000,
});


export default BackendInstance