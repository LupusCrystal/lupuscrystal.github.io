<template>
  <div class="bg-primary">
    <NuxtLayout>
      <header>
        <Header />
      </header>

      <main>
        <NuxtPage />
      </main>

      <footer>
        <Footer />
      </footer>
    </NuxtLayout>
  </div>
</template>
<style>
@import "tailwindcss";
@import "assets/css/main.css";
@reference "assets/css/main.css";

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>