<template>
  <div class="p-4 bg-gray-100">
    <h1 class="text-2xl font-bold mb-4">To-Do List</h1>
    <div class="mb-4">
      <input
        v-model="newTaskTitle"
        class="p-2 border rounded"
        placeholder="New task title"
      />
      <button
        @click="addTask"
        class="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </div>
    <ul>
      <li
        v-for="task in tasks"
        :key="task.id"
        class="mb-2 p-2 border rounded shadow"
      >
        <span class="text-lg">{{ task.title }}</span>
        <button
          @click="deleteTask(task.id)"
          class="ml-4 bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </li>
    </ul>
    <div class="mt-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="bg-gray-300 text-white px-4 py-2 rounded"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage >= totalPages"
        class="ml-2 bg-gray-300 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTodoStore } from "@/stores/ToDoBe.js";

const store = useTodoStore();
const newTaskTitle = ref("");

const fetchTasks = () => {
  store.fetchTasks(store.currentPage);
};

const addTask = () => {
  if (newTaskTitle.value.trim()) {
    store.addTask({ title: newTaskTitle.value });
    newTaskTitle.value = "";
  }
};

const deleteTask = (id) => {
  store.deleteTask(id);
};

const prevPage = () => {
  if (store.currentPage > 1) {
    store.currentPage--;
    fetchTasks();
  }
};

const nextPage = () => {
  if (store.currentPage < store.totalPages) {
    store.currentPage++;
    fetchTasks();
  }
};

onMounted(() => {
  fetchTasks();
});

const tasks = store.$state.tasks;
const currentPage = store.$state.currentPage;
const totalPages = store.$state.totalPages;
</script>
