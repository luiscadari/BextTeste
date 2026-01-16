<script>
import TaskForm from "@/components/Tasks/Form.vue";
import ErrorAlert from "@/components/ErrorAlert.vue";
import { set } from "@vueuse/core";
export default {
  name: "CreateTaskPage",
  components: {
    TaskForm,
    ErrorAlert,
  },
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    handleError(errors) {
      this.errors = errors;
      setTimeout(() => {
        this.errors = [];
      }, 5000);
    },
  },
};
</script>

<template>
  <TaskForm @error="handleError" class="max-w-screen" />
  <div
    v-if="errors && errors.length > 0"
    class="fixed bottom-4 right-4 space-y-2"
  >
    <ErrorAlert class="w-80 h-20" v-for="error in errors" :message="error" />
  </div>
</template>
