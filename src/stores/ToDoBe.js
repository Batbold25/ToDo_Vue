import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    tasks: [],
    currentPage: 1,
    totalPages: 0,
  }),
  actions: {
    async fetchTasks(page = 1) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}`
      );
      this.tasks = response.data;
      this.totalPages = Math.ceil(response.headers["x-total-count"] / 10); // Adjust the count per page if needed
    },

    async addTask(task) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        task
      );
      this.tasks.push(response.data);
    },

    async deleteTask(taskId) {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${taskId}`
        );
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    },
  },
});
