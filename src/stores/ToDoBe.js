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
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );
        this.tasks = response.data;

        this.totalPages = Math.ceil(response.headers["x-total-count"] / 10);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },

    async addTask(newTask) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          newTask
        );
        this.tasks.push(response.data);
      } catch (error) {
        console.error("Error adding task:", error);
      }
    },
    async deleteTask(id) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.tasks = this.tasks.filter((task) => task.id !== id);
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    },
  },
});
