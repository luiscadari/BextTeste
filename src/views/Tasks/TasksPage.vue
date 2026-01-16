<script>
import axios from "axios";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { FolderOpen } from "lucide-vue-next";
import ErrorAlert from "@/components/ErrorAlert.vue";
import Badge from "@/components/ui/badge/Badge.vue";
import Table from "@/components/Tasks/Table.vue";
import Spinner from "@/components/ui/spinner/Spinner.vue";
import Button from "@/components/ui/button/Button.vue";
export default {
  name: "TasksPage",
  components: {
    Table,
    Spinner,
    Button,
    ErrorAlert,
    Badge,
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
    FolderOpen,
  },
  data() {
    return {
      tasks: [],
      categories: [],
      categorySelected: null,
      priorities: [],
      prioritySelected: null,
      isLoading: true,
      errors: null,
      modalIsOpen: false,
      selectedTask: null,
    };
  },
  computed: {
    filtredTasks() {
      if (this.isLoading) {
        return [];
      }
      if (this.categorySelected && this.prioritySelected) {
        return this.tasks.filter(
          (task) =>
            task.category === this.categorySelected &&
            task.priority === this.prioritySelected
        );
      }
      if (this.categorySelected && !this.prioritySelected) {
        return this.tasks.filter(
          (task) => task.category === this.categorySelected
        );
      }
      if (!this.categorySelected && this.prioritySelected) {
        return this.tasks.filter(
          (task) => task.priority === this.prioritySelected
        );
      }
      return this.tasks;
    },
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
      const categoriesResponse = await axios.get(
        "http://localhost:3000/categories"
      );
      this.categories =
        typeof categoriesResponse.data == "string"
          ? JSON.parse(categoriesResponse.data)
          : categoriesResponse.data;
      const prioritiesResponse = await axios.get(
        "http://localhost:3000/priorities"
      );
      this.priorities =
        typeof prioritiesResponse.data == "string"
          ? JSON.parse(prioritiesResponse.data)
          : prioritiesResponse.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    async fetchTasks() {
      const errors = [];
      this.isLoading = true;
      try {
        const response = await axios.get("http://localhost:3000/tasks");
        this.tasks =
          typeof response.data == "string"
            ? JSON.parse(response.data)
            : response.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        errors.push("Erro ao buscar tarefas.");
      } finally {
        this.isLoading = false;
        if (errors.length > 0) {
          this.errors = errors;
        }
      }
    },
    openModal(task) {
      this.modalIsOpen = true;
      this.selectedTask = task;
    },
  },
};
</script>

<template>
  <div class="max-w-svw max-h-screen">
    <div class="m-auto mb-12 mt-2">
      <p class="text-3xl font-bold">Suas tarefas 📑</p>
      <Button
        @click="() => this.$router.push({ path: '/user/tasks/create' })"
        class="mt-12 w-48"
        >Adicionar Tarefa</Button
      >
      <div
        class="mt-12 mb-4 m-auto text-left object-center justify-center max-w-screen flex space-x-1"
      >
        <p class="text-sm font-light text-left">
          Filtrar por Categoria:
          <Badge
            :variant="categorySelected === category ? 'default' : 'outline'"
            v-for="category in categories"
            :key="category"
            class="ml-4 hover:cursor-pointer"
            @click="
              categorySelected === category
                ? (categorySelected = null)
                : (categorySelected = category)
            "
            >{{ category }}</Badge
          >
        </p>
      </div>
      <div
        class="mt-2 mb-2 m-auto object-center justify-center max-w-screen flex space-x-1"
      >
        <p class="text-left text-sm font-light">
          Filtrar por Prioridade:
          <Badge
            :variant="prioritySelected === priority ? 'default' : 'outline'"
            v-for="priority in priorities"
            :key="priority"
            class="ml-4 hover:cursor-pointer"
            @click="
              prioritySelected === priority
                ? (prioritySelected = null)
                : (prioritySelected = priority)
            "
            >{{ priority }}</Badge
          >
        </p>
      </div>
    </div>
    <Table
      class="max-w-screen m-auto"
      v-if="filtredTasks.length > 0 && !isLoading"
      :tasks="filtredTasks"
      @updateTask="fetchTasks"
    ></Table>
    <div v-if="isLoading" class="mx-auto">
      <Spinner />
    </div>

    <Empty v-else-if="!isLoading && filtredTasks.length === 0">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen />
        </EmptyMedia>
        <EmptyTitle>Nenhuma tarefa encontrada. 🧐 </EmptyTitle>
        <EmptyDescription
          >Tente adicionar uma nova tarefa, ou, mudar a categoria
          selecionada.</EmptyDescription
        >
      </EmptyHeader>
      <EmptyContent>
        <Button @click="() => this.$router.push({ path: '/user/tasks/create' })"
          >Adicionar tarefa</Button
        >
      </EmptyContent>
    </Empty>
    <div v-if="errors && errors.length > 0">
      <ErrorAlert v-for="error in errors" :key="error" :message="error" />
    </div>
  </div>
</template>
