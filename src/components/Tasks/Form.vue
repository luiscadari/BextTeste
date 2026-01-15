<script>
import axios from "axios";
import Input from "../ui/input/Input.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Textarea from "../ui/textarea/Textarea.vue";
import Button from "../ui/button/Button.vue";
export default {
  name: "TaskForm",
  components: {
    Button,
    Input,
    Textarea,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  },
  data() {
    return {
      title: "",
      description: "",
      conclusionDate: "",
      priority: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true;
      const errors = [];
      if (!this.title || this.title.trim() === "") {
        errors.push("O título da tarefa é obrigatório.");
      }
      if (!this.priority || this.priority.trim() === "") {
        errors.push("A prioridade da tarefa é obrigatória.");
      }
      if (errors.length > 0) {
        this.$emit("error", errors);
        this.isLoading = false;
        return;
      }
      const newTask = {
        title: this.title,
        description: this.description,
        priority: this.priority,
        status: "Pendente",
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/tasks",
          newTask
        );
        this.$emit("task-added");
        setTimeout(() => this.$router.push({ path: "/user/tasks" }), 1000);
      } catch (e) {
        console.log(e);
        this.$emit("error", "Erro ao adicionar a tarefa. Tente novamente.");
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-lg h-3/4 rounded-3xl space-y-6 shadow-2xl"
  >
    <div>
      <p class="text-4xl font-bold pt-12 mb-12">Criar tarefa</p>
      <label for="task-title" class="block text-lg font-medium text-gray-700"
        >Título da Tarefa</label
      >
      <div class="px-16 mt-1">
        <Input
          type="text"
          :disabled="isLoading"
          name="task-title"
          id="task-title"
          placeholder="Digite o título da tarefa"
          v-model="title"
        />
      </div>
    </div>

    <div>
      <label for="task-desc" class="block text-lg font-medium text-gray-700"
        >Descrição da Tarefa</label
      >
      <div class="mt-1 px-16">
        <Textarea
          :disabled="isLoading"
          id="task-desc"
          name="task-desc"
          rows="4"
          placeholder="Descreva a tarefa aqui..."
          v-model="description"
        ></Textarea>
      </div>
    </div>

    <div class="text-center justify-center items-center block">
      <label class="text-lg" for="task-priority"> Prioridade da Tarefa </label>
      <div class="justify-center mt-6 items-center flex">
        <Select class="" v-model="priority" :disabled="isLoading">
          <SelectTrigger>
            <SelectValue placeholder="Selecione a prioridade" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Prioridade</SelectLabel>
              <SelectItem
                v-for="item in ['Baixa', 'Média', 'Alta']"
                :value="item"
                :key="item"
              >
                {{ item }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div class="pt-6 pb-6">
      <Button type="submit" :loading="isLoading"> Adicionar Tarefa </Button>
    </div>
  </form>
</template>
