<script>
import Form from "../../components/Login/Form.vue";
import ErrorAlert from "@/components/ErrorAlert.vue";

export default {
  name: "LoginPage",
  components: {
    Form,
    ErrorAlert,
  },
  data() {
    return {
      errors: null,
    };
  },
  methods: {
    handleError(message) {
      this.errors = message;
    },
  },
};
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center flex-col">
    <h1 class="text-4xl font-bold mb-4">Login Page</h1>
    <p class="font-medium">Por favor, faça login para continuar.</p>
    <Form @error="handleError" />
    <ErrorAlert v-if="errors" :message="errors" />
  </div>
</template>
