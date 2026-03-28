<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="flex flex-col items-center justify-between gap-4 bg-dark px-10 py-10 sm:flex-row">
    <p class="text-sm text-muted">© {{ year }} DevCourse. Todos os direitos reservados.</p>
    <nav class="flex gap-6">
      <a href="#" class="text-sm text-muted transition-colors hover:text-white">Política de Privacidade</a>
      <a href="#" class="text-sm text-muted transition-colors hover:text-white">Termos de Uso</a>
      <a href="#" class="text-sm text-primary transition-colors hover:text-primary/80">Suporte</a>
    </nav>
  </footer>
</template>
