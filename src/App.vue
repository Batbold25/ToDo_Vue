<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
      <AddTask />
      <TodoList />
    </div>
  </div>
</template>

<script setup>
// import AddTask from "./components/AddTask.vue";
import TodoList from "@/components/TodoList.vue";
</script>
