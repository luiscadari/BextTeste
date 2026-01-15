<script>
import Form from "../../components/Login/Form.vue";
export default {
  name: "LoginPage",
  components: {
    Form,
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
    <Alert v-if="errors" variant="destructive">
      <AlertCircle class="w-4 h-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Credenciais inválidas. Por favor, tente novamente.
      </AlertDescription>
    </Alert>
  </div>
</template>
