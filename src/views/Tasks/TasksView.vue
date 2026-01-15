<script>
import axios from "axios";

import Table from "@/components/Tasks/Table.vue";
import Spinner from "@/components/ui/spinner/Spinner.vue";
export default {
  name: "TasksView",
  components: {
    Table,
    Spinner,
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
  <div class="container mx-auto p-4">
    <Table v-if="tasks.length > 0 && !isLoading" :tasks="tasks"></Table>
    <div v-if="isLoading" class="mx-auto">
      <Spinner />
    </div>
    <p v-if="!isLoading && tasks.length === 0">Nenhuma tarefa encontrada.</p>
  </div>
</template>
