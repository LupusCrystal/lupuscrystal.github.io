<template>
    <div class="w-full min-h-screen bg-black flex flex-col justify-center items-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-accent mt-8">{{post.title}}</h1>
        <section id="blog-post" class="bg-primary max-w-[120rem] rounded-lg mt-8 mb-4 p-2 md:p-4 lg:p-12 border-4 border-accent">
            <ContentRenderer :value="post" />
        </section>
    </div>
</template>
<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
console.log(post);
</script>
<style>
@import "tailwindcss";
@import "assets/css/main.css";
@reference "assets/css/main.css";

#blog-post {
    h1 {
        @apply text-3xl md:text-4xl lg:text-5xl text-center font-bold text-accent;
    }
    h2 {
        @apply text-2xl md:text-3xl lg:text-4xl text-center font-bold text-accent;
    }
    h3 {
        @apply text-xl md:text-2xl lg:text-3xl text-center font-bold text-accent;
    }
    h4 {
        @apply text-lg md:text-xl lg:text-2xl text-center font-bold text-accent;
    }
    p {
        @apply text-2xl md:text-3xl lg:text-4xl text-red-50 mt-8 mb-8;
    }
    li {
        @apply text-2xl md:text-3xl lg:text-4xl text-red-50 mt-6 mb-6;
    }
    ul {
        @apply list-disc ml-8;
    }
    ol {
        @apply list-decimal ml-8;
    }
    a {
        @apply text-2xl md:text-3xl lg:text-4xl text-red-400 mt-6 mb-6;
    }
    hr {
        @apply bg-accent min-h-1.5 rounded-2xl;
    }
}
</style>