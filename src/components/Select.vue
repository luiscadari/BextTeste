<script lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default {
  name: "SelectComponent",
  components: {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  },
  props: ["items", "placeholder", "label"],
};
</script>

<template>
  <Select>
    <SelectTrigger>
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{{ label }}</SelectLabel>
        <SelectItem v-for="item in items" :value="item" :key="item">
          {{ item }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
