<template>
    <div data-aos="zoom-in-up" class="w-full">
        <div class="w-full rounded-xl bg-gradient-to-b from-red-500 to-accent flex flex-col justify-center items-center p-4">
            <p class="text-xl md:text-2xl lg:text-3xl font-bold text-white p-2">{{title}}</p>
            <audio controls class="bg-accent rounded-full w-full md:max-w-[80%]">
                <slot />
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
</template>
<script setup>
defineProps(['title'])
</script>