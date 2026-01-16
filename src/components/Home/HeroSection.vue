<template>
  <div
    class="max-w-screen max-h-screen flex justify-center items-center flex-col"
  >
    <h1 class="text-4xl font-bold mb-4">Gerenciador de Tarefas 📑</h1>
    <p class="font-medium mb-2">
      Organize suas tarefas de forma simples e aumente sua produtividade!
    </p>
    <p class="font-extralight italic">
      Projeto realizado para desafio técnico da Bext
    </p>
    <div class="mt-6">
      <button
        v-on:click="() => this.$router.push({ path: '/login' })"
        class="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded transition-colors"
      >
        Começar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
