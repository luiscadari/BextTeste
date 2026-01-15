<script lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  },
};
</script>

<template>
  <Table>
    <TableCaption>Suas tarefas 📑</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]"> Nome </TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Prazo</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="task in tasks" :key="task.id">
        <TableCell class="font-medium"> {{ task.name }} </TableCell>
        <TableCell>{{ task.status }}</TableCell>
        <TableCell>{{ task.dueDate }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
