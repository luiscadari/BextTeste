<script lang="ts">
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async handleCheckboxChange(task: Task) {
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
      } finally {
        this.isLoading = false;
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
        <TableHead class="text-right">Feito</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow class="h-14" v-for="task in tasks" :key="task.id">
        <TableCell class="font-medium text-left"> {{ task.title }} </TableCell>
        <TableCell class="text-left">{{ task.priority }}</TableCell>
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
