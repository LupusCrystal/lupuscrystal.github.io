<template>
    <button class="
    
    bg-transparent border-4 border-accent rounded-2xl
    
    font-bold text-2xl md:text-3xl lg:text-4xl

    min-w-28 md:min-w-32 lg:min-w-36 min-h-12 md:min-h-24 w-full max-w-[400px]

    p-4 gap-9

    shadow-xl shadow-transparent

    flex flex-row items-center justify-around

    transition duration-300 ease-out

    hover:-translate-y-3 hover:bg-accent hover:shadow-red-200
    active:scale-95 active:duration-100 active:translate-y-4 active:shadow-red-200/10
    ">
        <slot />
    </button>
</template>