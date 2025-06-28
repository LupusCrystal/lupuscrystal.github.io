<template>
    <div data-aos="fade-up">
        <div class="
        /* Theming. */
        bg-gradient-to-b from-red-600 to-accent text-red-50 rounded-xl
    
        /* Sizing. */
        min-w-24 w-full max-w-[82rem]
        min-h-[32rem] h-full
    
        /* Margins And Padding. */
        lg:m-3 p-2 md:p-4
    
        /* Layout. */
        flex flex-col justify-evenly items-center

        /* Shadow. */
        shadow-xl shadow-transparent

        /* Juice. */
        transition duration-200 ease-out
        md:hover:shadow-black/30
        ">
            <slot />
        </div>
    </div>
</template>
