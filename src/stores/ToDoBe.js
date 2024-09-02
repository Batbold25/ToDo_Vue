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
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_page=${page}`
        );
        this.tasks = response.data;
        this.totalPages = Math.ceil(response.headers["x-total-count"] / 10);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },

    async addTask(task) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          task
        );
        this.tasks.push(response.data);
      } catch (error) {
        console.error("Error adding task:", error);
      }
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
