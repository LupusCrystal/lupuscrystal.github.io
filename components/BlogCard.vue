<script setup>
    defineProps({
      title: { type: String, required: true },
      date: { type: String, required: true },
      description: { type: String, required: true },
      path: { type: String, required: true }
    })
</script>
<template>
    <div data-aos="flip-up">
        <NuxtLink :to="path" class="
        /* Theming. */
        bg-accent text-red-50 rounded-xl
    
        /* Sizing. */
        min-w-24 w-full max-w-[64rem]
        min-h-[12rem] h-full
    
        /* Margins And Padding. */
        m-1 md:m-2 lg:m-3
        p-2 md:p-4
    
        /* Layout. */
        flex flex-col justify-evenly items-center

        /* Shadow. */
        shadow-xl shadow-transparent

        /* Juice. */
        transition duration-200 ease-out
        md:hover:scale-105 md:hover:shadow-black/30
        active:scale-95  md:active:scale-75
        ">
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl text-center">{{title}}</h1>
            <p><strong>{{date}}</strong></p>
            <p class="text-2xl">{{description}}</p>
        </NuxtLink>
    </div>
</template>