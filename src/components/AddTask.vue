<template>
  <form @submit.prevent="submitTask" class="flex items-center mb-6">
    <input
      v-model="taskTitle"
      placeholder="New Task"
      class="flex-grow p-2 border border-gray-300 rounded-lg mr-2"
    />
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg">
      Add Task
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "@/stores/ToDoBe.js";

const todoStore = useTodoStore();
const taskTitle = ref("");

const submitTask = () => {
  if (taskTitle.value.trim()) {
    todoStore.addTask({ title: taskTitle.value, completed: false });
    taskTitle.value = "";
  }
};
</script>
