<template>
  <div class="w-screen h-screen flex justify-center items-center flex-col">
    <h1 class="text-4xl font-bold mb-4">Gerenciador de Tarefas 📑</h1>
    <p class="font-medium mb-2">
      Organize suas tarefas de forma simples e aumente sua produtividade!
    </p>
    <p class="font-extralight italic">
      Projeto realizado para desafio técnico da Bext
    </p>
    <div class="mt-6">
      <button
        v-on:click="() => router.push('/login')"
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Começar
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      router: useRouter(),
    };
  },
};
</script>
