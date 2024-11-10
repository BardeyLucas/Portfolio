<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';
// const language = reactive({
//   lang: false, // false pour FR, true pour EN
// });
const lang = ref(false)
</script>
<template>
    <header class="lg:h-[50px] lg:px-12 px-auto w-screen lg:w-full absolute text-Blanc bg-Background font-michroma flex ">
        <nav class="flex justify-between items-center w-[350px] lg:w-full mx-auto lg:mx-0 h-full">
            <RouterLink to="/">
                <p>Acceuil</p>
            </RouterLink>
            <nav class="flex gap-5">
                <button><span @click="lang = true" :class="{'!font-semibold':lang}">EN</span>/<span class="font-semibold" @click="lang = false" :class="{'!font-normal':lang}">FR</span></button>
                <button>Menu</button>
            </nav>
        </nav>
    </header>
</template>