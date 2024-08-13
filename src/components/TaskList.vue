<template>
    <div class="max-w-3xl mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-8">Lista de Tarefas</h1>
      <ul class="space-y-4">
        <li 
          v-for="task in tasks" 
          :key="task.id" 
          class="bg-white p-4 rounded-lg shadow flex justify-between items-center"
        >
        <div class="flex flex-col">
          <div class="flex items-center space-x-4">
            <input 
              type="checkbox" 
              :checked="task.completed" 
              @change="toggleStatus(task)" 
              class="form-checkbox h-5 w-5 text-blue-600"
            />
            <router-link 
              :to="`/tasks/${task.id}`" 
              class="text-lg font-medium text-gray-900"
            >
              {{ task.title }}
            </router-link>
          </div>
          <p class="text-sm text-gray-500 mt-1">
            Última Atualização: {{ formatDate(task.updated_at) }}
          </p>
        </div>
          <div class="flex space-x-4">
            <button 
              @click="editTask(task.id)" 
              class="text-blue-500 hover:text-blue-700 transition duration-150"
            >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                <g fill="#ffa353" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M22.82813,3c-0.51175,0 -1.02356,0.19544 -1.41406,0.58594l-2.41406,2.41406l5,5l2.41406,-2.41406c0.781,-0.781 0.781,-2.04713 0,-2.82812l-2.17187,-2.17187c-0.3905,-0.3905 -0.90231,-0.58594 -1.41406,-0.58594zM17,8l-11.74023,11.74023c0,0 0.91777,-0.08223 1.25977,0.25977c0.342,0.342 0.06047,2.58 0.48047,3c0.42,0.42 2.64389,0.12436 2.96289,0.44336c0.319,0.319 0.29688,1.29688 0.29688,1.29688l11.74023,-11.74023zM4,23l-0.94336,2.67188c-0.03709,0.10544 -0.05623,0.21635 -0.05664,0.32813c0,0.55228 0.44772,1 1,1c0.11177,-0.00041 0.22268,-0.01956 0.32813,-0.05664c0.00326,-0.00128 0.00652,-0.00259 0.00977,-0.00391l0.02539,-0.00781c0.00196,-0.0013 0.00391,-0.0026 0.00586,-0.00391l2.63086,-0.92773l-1.5,-1.5z"></path></g></g>
            </svg>

            </button>
            <button 
              @click="deleteTask(task.id)" 
              class="text-red-500 hover:text-red-700 transition duration-150"
            >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                <g fill="#ff3232" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M13,3c-0.26757,-0.00363 -0.52543,0.10012 -0.71593,0.28805c-0.1905,0.18793 -0.29774,0.44436 -0.29774,0.71195h-5.98633c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-5.98633c0,-0.26759 -0.10724,-0.52403 -0.29774,-0.71195c-0.1905,-0.18793 -0.44836,-0.29168 -0.71593,-0.28805zM6,8v16c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-16z"></path></g></g>
            </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: []
      };
    },
    created() {
      this.fetchTasks();
    },
    methods: {
      fetchTasks() {
        this.$http.get('/tasks').then(response => {
          this.tasks = response.data;
        });
      },
      deleteTask(id) {
        this.$http.delete(`/tasks/${id}`).then(() => {
          this.fetchTasks();
        });
      },
      toggleStatus(task) {
        this.$http.patch(`/tasks/${task.id}/status`, {
          completed: !task.completed
        }).then(() => {
          this.fetchTasks();
        });
      },
      editTask(id) {
        this.$router.push(`/edit/${id}`);
      },
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(date).toLocaleDateString(undefined, options);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS handles a maior parte do estilo */
  </style>
  