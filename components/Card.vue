<template>
    <div data-aos="fade-up">
        <div  class="
        /* Theming. */
        bg- text- rounded-xl
    
        /* Sizing. */
        min-w-24 w-full max-w-[24rem]
        min-h-[28rem] h-full max-h-[42rem]
    
        /* Responsive Size. */
        max-[2278px]:min-h-[40rem]
        min-[2278px]:max-h-[12rem]
        min-[2278px]:max-w-[46rem]
    
        /* Margins And Padding. */
        m-1 md:m-2 lg:m-3 p-2 md:p-4
    
        /* Layout. */
        flex flex-col justify-evenly items-center
        min-[2278px]:flex-row

        /* Shadow. */
        shadow-xl shadow-transparent

        /* Juice. */
        transition duration-200 ease-out
        md:hover:scale-105 md:hover:shadow-black/30
        ">
            <slot />
        </div>
    </div>
</template>
