<template>
    <div class="max-w-lg mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-8">
        {{ isEdit ? 'Editar Tarefa' : 'Criar Tarefa' }}
      </h1>
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input 
            type="text" 
            v-model="task.title" 
            id="title" 
            required 
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
        </div>
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            v-model="task.description" 
            id="description" 
            rows="4" 
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div class="flex items-center">
          <input 
            type="checkbox" 
            v-model="task.completed" 
            id="completed" 
            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          >
          <label for="completed" class="ml-2 block text-sm text-gray-900">Completed</label>
        </div>
        <div class="flex justify-between">
          <button 
            type="submit" 
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {{ isEdit ? 'Alterar' : 'Salvar' }}
          </button>
          <button 
            @click.prevent="cancel" 
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        task: {
          title: '',
          description: '',
          completed: false
        },
        isEdit: false
      };
    },
    created() {
      if (this.$route.params.id) {
        this.isEdit = true;
        this.fetchTask();
      }
    },
    methods: {
      fetchTask() {
        const id = this.$route.params.id;
        this.$http.get(`/tasks/${id}`).then(response => {
          this.task = response.data;
        });
      },
      submitForm() {
        if (this.isEdit) {
          this.$http.put(`/tasks/${this.$route.params.id}`, this.task).then(() => {
            this.$router.push('/');
          });
        } else {
          this.$http.post('/tasks', this.task).then(() => {
            this.$router.push('/');
          });
        }
      },
      cancel() {
        this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS lida com a maior parte do estilo */
  </style>
  