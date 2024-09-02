<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold mb-6 text-center">To-Do List</h1>
      <AddTask />
      <TodoList />
    </div>
  </div>
</template>

<script setup>
import AddTask from "./components/AddTask.vue";
import TodoList from "./components/TodoList.vue";
</script>
