<script>
import axios from "axios";

import Table from "@/components/Tasks/Table.vue";
import Spinner from "@/components/ui/spinner/Spinner.vue";
import Button from "@/components/ui/button/Button.vue";
export default {
  name: "TasksPage",
  components: {
    Table,
    Spinner,
    Button,
  },
  data() {
    return {
      tasks: [],
      isLoading: true,
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      if (response.status !== 200) {
        this.$emit("error", `HTTP error! status: ${response.status}`);
      }
      this.tasks =
        typeof response.data == "string"
          ? JSON.parse(response.data)
          : response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<template>
  <div class="w-screen h-screen container mx-auto">
    <div class="mb-12 mt-24">
      <p class="text-4xl font-bold">Suas tarefas 📑</p>
      <Button
        @click="() => this.$router.push({ path: '/user/tasks/create' })"
        class="mt-12"
        >Adicionar Tarefa</Button
      >
    </div>
    <Table v-if="tasks.length > 0 && !isLoading" :tasks="tasks"></Table>
    <div v-if="isLoading" class="mx-auto">
      <Spinner />
    </div>
    <p v-if="!isLoading && tasks.length === 0">Nenhuma tarefa encontrada.</p>
  </div>
</template>
