<template>
    <div class="max-w-3xl mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-8">Detalhes da Tarefa</h1>
      <div v-if="task" class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl font-semibold mb-4">{{ task.title }}</h2>
        <p class="text-gray-700 mb-4">{{ task.description }}</p>
        <p class="text-sm text-gray-500 mb-4">Status: 
          <span :class="task.completed ? 'text-green-500' : 'text-yellow-500'">
            {{ task.completed ? 'Completed' : 'Pending' }}
          </span>
        </p>
        <router-link 
          :to="`/edit/${task.id}`" 
          class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150"
        >
          Editar Tarefa
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        task: null
      };
    },
    created() {
      this.fetchTask();
    },
    methods: {
      fetchTask() {
        const id = this.$route.params.id;
        this.$http.get(`/tasks/${id}`).then(response => {
          this.task = response.data;
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS lida com a maior parte do estilo */
  </style>
  