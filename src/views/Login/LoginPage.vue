<template>
  <div class="w-screen h-screen flex justify-center items-center flex-col">
    <h1 class="text-4xl font-bold mb-4">Login Page</h1>
    <p class="font-medium">Por favor, faça login para continuar.</p>
    <Form />
  </div>
</template>

<script>
import Form from "../../components/Login/Form.vue";
export default {
  name: "LoginPage",
  components: {
    Form,
  },
};
</script>
