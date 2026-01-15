import { defineStore } from "pinia";

export const tasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Array<{
      id: number;
      title: string;
      description: string;
      status: boolean;
      date: Date;
    }>,
  }),
  getters: {
    allTasks(state) {
      return state.tasks;
    },
    getTaskById: (state) => {
      return (id: number) => state.tasks.find((task) => task.id === id);
    },
  },
  actions: {
    addTask(title: string, description: string, date: Date) {
      const newTask = {
        id: this.tasks.length + 1,
        title,
        description,
        status: false,
        date,
      };
      this.tasks.push(newTask);
    },
    putTask(
      id: number,
      updatedTask: {
        title: string;
        description: string;
        status: boolean;
        date: Date;
      }
    ) {
      const taskIndex = this.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        this.tasks[taskIndex] = {
          id: taskIndex,
          ...updatedTask,
        };
      }
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    markDone(id: number) {
      if (!this.tasks[id]) return;
      this.tasks[id].status = true;
    },
    markUndone(id: number) {
      if (!this.tasks[id]) return;
      this.tasks[id].status = false;
    },
  },
});
