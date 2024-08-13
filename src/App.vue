<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-blue-600 text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Todo App</h1>
        <nav class="space-x-4">
          <router-link 
            to="/" 
            class="text-white hover:bg-blue-500 px-4 py-2 rounded-md transition duration-150"
          >
            Home
          </router-link>
          <router-link 
            to="/create" 
            class="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition duration-150"
          >
            Criar Tarefa
          </router-link>
        </nav>
      </div>
    </header>
    <main class="flex-1 container mx-auto p-4">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
/* Tailwind CSS lida com a maior parte do estilo */
</style>
