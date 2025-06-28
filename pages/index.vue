<template>
<div>
  <section class="bg-[url('/assets/backgrounds/BlackBackground.webp')] bg-accent open-up-animation">
    <div class="darkener"></div>
    <div class="relative w-screen min-h-screen text-center flex flex-col justify-center items-center text-accent">
      <h3 class="text-3xl lg:text-4xl mb-2 mt-4 font-bold">Welcome To:</h3>
      <h1 class="font-bold text-5xl md:text-9xl bg-gradient-to-b from-amber-400 via-red-500 to-red-600 bg-clip-text text-transparent">Crystal's HomePage</h1>
      <h2 class="relative text-4xl md:text-5xl lg:text-6xl font-bold text-black bg-gradient-to-b from-red-600 to-accent p-2 rounded-sm transition duration-200 ease-out hover:scale-110 active:scale-90">
        The Call To Code
      </h2>

      <img src="/assets/vector/ScrollDown.svg" class="self-center size-20 animate-bounce mt-8 mb-4">
    </div>
  </section>

  <section class="bg-[url('/assets/backgrounds/Mountain.webp')]">
    <div class="darkener"></div>
    <div class="relative w-screen min-h-screen flex flex-col justify-center items-center align-middle">
      <MiniTitle class="mt-4">About Me</MiniTitle>
      <ExpandingCard id="about-me-card" class="text-2xl md:text-3xl lg:text-4xl mb-12 text-center font-bold text-white md:m-8">
        <p>My name is LupusCrystal, or just Crystal.</p>
        <p>I am a Front End Web Developer, and a Programmer.</p>
        <p>I like privacy, open source technologies, and narrative stories.</p>
        <p>Sometimes I make simple music using Linux Multi Media Workstation.</p>
        <!--<p>This is my personal website. If you are looking for business side of things, you can <a href="" class="underline">look at my business website here.</a></p>-->
        <p>Scroll down and find out more about me!</p>
      </ExpandingCard>
    </div>

  </section>

  <section class="bg-[url('/assets/backgrounds/MountainOne.webp')]">
    <div class="darkener"></div>
    <div class="relative w-screen min-h-screen flex flex-col justify-center items-center">

      <MiniTitle class="mt-6">FaQ</MiniTitle>

      <WrapBox class="mb-6 md:p-4">
        <Collapse title="What are you doing in your free time?">
          I read books, write code, compose music, and draw simple art in my free time.
        </Collapse>
        <Collapse title="How can I reach you?">
          <a href="https://matrix.to/#/@lupuscrystal:matrix.org" class="underline">You can do it via the Matrix protocol.</a>
        </Collapse>
        <Collapse title="Why do you only accept Monero XMR as money?">
          Because I value financial freedom, and I care about privacy.
        </Collapse>
        <Collapse title="What technologies are you using?">
          I utilize Nuxt.js and TailWind CSS in my websites. For my personal projects, I use Rust and Lua.
        </Collapse>
        <Collapse title="When you are awake?">
          At night. Why, eh? It is my biological preference.
        </Collapse>
        <Collapse title="What kind of narratives do you like?">
           The ones that build a strong emotional connection to the characters in it, build a strong and vivid world, and present unexpected turns of events. Detective, Sci-Fi, and Drama are my preferred ones.
        </Collapse>
        <!--
        TODO: Uncomment that, when the freelance site is ready.
        
        <Collapse title="Where can I hire you and find information about your skills?">
          <a class="underline">You can hire me and find information about my skills here.</a>
        </Collapse>-->
        <Collapse title="What is your favorite drink?">
          I really like Cherry pop, it tastes amazing. But it does cost a lot, eh? Sometimes I get double double, sometimes I just drink water.
        </Collapse>
        <Collapse title="What is your favorite programming language?">
          My favorite programming language is Rust. I also enjoy using Lua, but I do not use it as much as I use Rust.
        </Collapse>
        <Collapse title="What Operating System are you utilizing?">
          I utilize a GNU Linux distribution as my only Operating System. Windows is a pig's breakfast.
        </Collapse>
        <Collapse title="What is your favorite instrument to use in a DAW?">
          Symphony piano, it sounds amazing, eh?
        </Collapse>
      </WrapBox>

    </div>
  </section>
</div>
</template>

<style>
@import "tailwindcss";
@import "assets/css/main.css";
@reference "assets/css/main.css";

.open-up-animation {
  animation: open-up-animation 3s ease-in-out 0s;
  clip-path: circle(300% at 50% 50%);
}

@keyframes open-up-animation {
  0% {clip-path: circle(0% at 50% 50%);}
  100% {clip-path: circle(300% at 50% 50%);}
}

/* A class for section that holds common section styling. I added background to each section individualy. */
section {
  @apply w-screen min-h-screen relative bg-cover bg-center border-b-4 border-accent;
}

/* Applied to a div container to make the background darker. It must be positioned in an absolute way, while other components are relative. */
.darkener {
  @apply absolute bg-black/60 inset-0;
}

</style>