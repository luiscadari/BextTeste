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
  <div
    class="m-auto max-w-screen max-h-screen container flex items-center flex-col"
  >
    <h1 class="text-4xl mt-16 font-bold mb-4">Login Page</h1>
    <p class="font-light mb-6">Por favor, faça login para continuar.</p>
    <Form class="border" @error="handleError" />
    <div class="fixed bottom-4 right-4">
      <ErrorAlert class="w-80 h-20" v-if="errors" :message="errors" />
    </div>
  </div>
</template>
