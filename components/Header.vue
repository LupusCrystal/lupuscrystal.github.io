<template>
    <!-- Do not forget to style the header. -->
    <div class="w-screen min-h-56 bg-black text-red-50 flex flex-col justify-center align-middle items-center
    border-b-4 border-accent
    ">
        <h1 class="self-center mt-2 mb-4 font-bold text-2xl md:text-3xl lg:text-4xl text-center">Lupus Crystal</h1>
        <nav class="self-center flex flex-col justify-center min-[1574px]:flex-row gap-6 md:gap-8 mt-2 mb-4 w-full p-1">
            <NuxtLink to="/"><HeaderButton class="group bootup-button-animation"><img src="/assets/vector/Home.svg" class="header-button-image header-button-icon" >Home</HeaderButton></NuxtLink>
            <NuxtLink to="/donate"><HeaderButton class="group bootup-button-animation delay-75"><img src="/assets/vector/SupportMe.svg" class="header-button-image heartbeat header-button-icon" >Donate</HeaderButton></NuxtLink>
            <a href="https://github.com/LupusCrystal"><HeaderButton class="group bootup-button-animation delay-100"><img src="/assets/vector/GitHub.svg" class="header-button-image header-button-icon" >GitHub</HeaderButton></a>
            <NuxtLink to="/blog" no-prefetch><HeaderButton class="group bootup-button-animation delay-150"><img src="/assets/vector/RSS.svg" class="header-button-image header-button-icon" >Blog</HeaderButton></NuxtLink>
            <!--<a><HeaderButton class="group bootup-button-animation delay-200"><img src="/assets/vector/HireMe.svg" class="header-button-image header-button-icon" >Hire</HeaderButton></a>-->
        </nav>
    </div>
</template>

<style>
@reference "tailwindcss";

.header-button-icon {
    @apply transition duration-200 ease-out group-hover:rotate-6;
}

.header-button-image {
    @apply size-16
}

.heartbeat {
    animation: heartbeat 4s infinite;
}

@keyframes heartbeat {
  0%   {scale: 90%;}
  15%   {scale: 90%;}
  25%  {scale: 120%;}
  35%  {scale: 100%;}
  45%  {scale: 120%;}
  50%  {scale: 90%;}
  75%  {scale: 90%;}
  100% {scale: 90%;}
}

.bootup-button-animation {
    animation: bootup-button 2s ease-out 0s;
}

@keyframes bootup-button {
    0% {
        opacity: 0.0;
        transform: translateY(0) scale(100%) rotate(0deg);
    }
    20% {
        opacity: 1.0;
        transform: translateY(-2rem) scale(110%) rotate(3deg);
    }
    30% {
        opacity: 1.0;
        transform: translateY(-1rem) scale(105%) rotate(1deg);
    }
    60% {
        opacity: 1.0;
        transform: translateY(0) scale(100%) rotate(0deg);
    }
}

</style>