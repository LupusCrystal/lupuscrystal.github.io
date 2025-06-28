<template>
    <section class="w-screen min-h-screen bg-[url('/assets/backgrounds/BlackCrystal.webp')]">
        <div class="darkener"></div>
        <div class="relative w-screen min-h-screen flex flex-col justify-center items-center">
            <h1 class="text-white font-bold text-4xl md:text-5xl lg:text-6xl">Blog</h1>
            <p class="text-white font-bold text-2xl md:text-3xl lg:text-4xl">Press on the article to read it.</p>
            <BlogCard v-for="post in blog" :key="post.path" :title="post.title" :description="post.description" :date="post.date" :path="post.path" />
        </div>
    </section>
</template>

<style>
@import "tailwindcss";
@import "assets/css/main.css";
@reference "assets/css/main.css";
</style>

<script setup lang="ts">
    const { data: blog } = await useAsyncData('documents-list', () => {
      return queryCollection('blog')
        .order('date', 'DESC')
        .select('title', 'path', 'description', 'date')
        .all()
    })
</script>