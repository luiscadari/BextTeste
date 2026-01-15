<script lang="ts">
import axios from "axios";
import ErrorAlert from "../ErrorAlert.vue";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Input from "../ui/input/Input.vue";
import Select from "../Select.vue";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Button from "../ui/button/Button.vue";
import Checkbox from "../ui/checkbox/Checkbox.vue";
import type { Task } from "@/types/task.type";
export default {
  name: "TasksTable",
  props: ["tasks"],
  components: {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Checkbox,
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    Input,
    ErrorAlert,
    Select,
  },
  data() {
    return {
      isLoading: false,
      editionMode: false,
      errors: [] as string[],
    };
  },
  methods: {
    async handleCheckboxChange(task: Task) {
      const errors = [];
      if (task.title.trim() === "") {
        errors.push("O título da tarefa não pode ser vazio.");
      }
      if (task.description.trim() === "") {
        errors.push("A descrição da tarefa não pode ser vazia.");
      }
      if (errors.length > 0) {
        this.errors = errors;
        return;
      }
      try {
        this.isLoading = true;
        const response = await axios.put(
          `http://localhost:3000/tasks/${task.id}`,
          {
            ...task,
            ...(task.conclusionDate
              ? { conclusionDate: null }
              : { conclusionDate: new Date().toISOString() }),
          }
        );
        if (response.status !== 200) {
          this.$emit("error", `HTTP error! status: ${response.status}`);
        }
        this.$emit("updateTask");
      } catch (e) {
        errors.push("Erro ao atualizar o status da tarefa.");
        this.errors = errors;
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },
    async handleEdit(task: Task) {
      if (this.editionMode) {
        try {
          this.isLoading = true;
          const response = await axios.put(
            `http://localhost:3000/tasks/${task.id}`,
            {
              ...task,
            }
          );
          this.editionMode = false;
          this.$emit("updateTask");
        } catch (e) {
          console.log(e);
        } finally {
          this.isLoading = false;
        }
      } else {
        this.editionMode = true;
      }
    },
  },
};
</script>

<template>
  <Table class="">
    <TableCaption>Suas tarefas 📑</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead> Nome </TableHead>
        <TableHead>Prioridade</TableHead>
        <TableHead class="text-right">Ver mais</TableHead>
        <TableHead class="text-right">Feito</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow class="h-14" v-for="task in tasks" :key="task.id">
        <TableCell class="font-medium text-left">
          {{ task.title }}
        </TableCell>
        <TableCell class="text-left">{{ task.priority }}</TableCell>
        <TableCell class="text-right">
          <Dialog>
            <DialogTrigger>
              <Button class="w-12 h-3">Abrir</Button>
            </DialogTrigger>
            <DialogContent class="max-h-[400px]">
              <DialogHeader>
                <DialogTitle class="mt-12"
                  ><p v-if="!editionMode">{{ task.title }}</p>
                  <Input v-else v-model="task.title"></Input>
                </DialogTitle>
                <DialogDescription class="mt-4">
                  <p v-if="!editionMode">{{ task.description }}</p>
                  <Input v-else v-model="task.description"></Input>
                  <p class="font-normal mt-2">
                    Prioridade:
                    <span v-if="!editionMode" class="font-bold">
                      {{ task.priority }}
                      {{
                        task.priority === "Baixa"
                          ? "🟢"
                          : task.priority === "Média"
                          ? "🟡"
                          : "🔴"
                      }}
                    </span>

                    <Select
                      v-else
                      :items="['Baixa', 'Média', 'Alta']"
                      placeholder="Selecione a prioridade"
                      label="Prioridade"
                      v-model="task.priority"
                    >
                    </Select>
                  </p>
                </DialogDescription>
                <p class="text-sm italic font-thin mt-2">
                  {{
                    task.conclusionDate
                      ? "Concluída no dia " +
                        new Date(task.conclusionDate).toLocaleDateString()
                      : "Pendente"
                  }}
                </p>
                <div class="block text-right mt-4">
                  <Checkbox
                    @click="handleCheckboxChange(task)"
                    :default-value="task.conclusionDate ? true : false"
                    :disabled="isLoading"
                    class="h-9"
                  />
                </div>
              </DialogHeader>
              <div v-if="errors && errors.length > 0">
                <ErrorAlert
                  v-for="error in errors"
                  :message="error"
                ></ErrorAlert>
              </div>
              <div class="flex justify-end space-x-4">
                <Button
                  class="w-18"
                  v-if="editionMode"
                  @click="() => (editionMode = false)"
                >
                  ❌
                </Button>
                <Button
                  class="bottom-0"
                  @click="async () => handleEdit(task)"
                  >{{ editionMode ? "💾" : "✏️" }}</Button
                >
              </div>
            </DialogContent>
          </Dialog>
        </TableCell>
        <TableCell class="text-right">
          <Checkbox
            @click="handleCheckboxChange(task)"
            :default-value="task.conclusionDate ? true : false"
            :disabled="isLoading"
            class="h-9"
          />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
