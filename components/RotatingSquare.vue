<template>

    <div class="
    rotator-class absolute
  bg-accent border-primary border-4
    ">

    </div>

</template>
<style>
.rotator-class {
    animation: rotator 10s ease-out 0s infinite;
}

@keyframes rotator {
    to {
        rotate: 360deg;
        filter: hue-rotate(360deg);
    }
}
</style>