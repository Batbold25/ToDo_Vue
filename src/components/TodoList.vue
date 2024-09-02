<template>
  <div>
    <ul class="mb-6">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="flex justify-between items-center p-4 mb-2 bg-gray-100 rounded-lg"
      >
        <span>{{ task.title }}</span>
        <button
          @click="deleteTask(task.id)"
          class="bg-red-500 text-white px-3 py-1 rounded-lg"
        >
          Delete
        </button>
      </li>
    </ul>
    <div class="flex justify-between">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from "@/stores/ToDoBe.js";
import { onMounted } from "vue";

const todoStore = useTodoStore();
const { tasks, currentPage, totalPages, fetchTasks, deleteTask } = todoStore;

onMounted(() => {
  fetchTasks();
});

const prevPage = () => {
  if (currentPage > 1) {
    todoStore.fetchTasks(currentPage - 1);
  }
};

const nextPage = () => {
  if (currentPage < totalPages) {
    todoStore.fetchTasks(currentPage + 1);
  }
};
</script>
