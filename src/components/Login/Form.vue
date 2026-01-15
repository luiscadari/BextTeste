<script>
import { authStore } from "@/stores/auth.store";

export default {
  name: "Form",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    async loginHandler() {
      if (!this.validEmail || !this.validPassword) {
        this.$emit(
          "error",
          "Por favor, preencha todos os campos corretamente."
        );
        return;
      }
      const store = authStore();
      const loginSuccess = store.login(this.email, this.password);
      if (loginSuccess) {
        // Redirect to dashboard or home page

        this.$router.push({ path: "/user/tasks" });
      } else {
        this.$emit("error", "E-mail ou senha inválidos.");
      }
    },
  },
  computed: {
    validEmail() {
      return this.email != "";
    },
    validPassword() {
      return this.password != "";
    },
  },
};
</script>

<template>
  <form
    class="bg-white p-6 rounded-3xl mt-9 shadow-2xl w-80"
    @submit.prevent="loginHandler"
  >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        E-mail
      </label>
      <input
        class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Digite seu e-mail"
        v-model="email"
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white mx-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Sign In
      </button>
    </div>
  </form>
</template>
