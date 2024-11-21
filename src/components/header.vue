<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Croix from './icons/Croix.vue';
import Burger from './icons/Burger.vue';
// const language = reactive({
//   lang: false, // false pour FR, true pour EN
// });
const lang = ref(false)

import { useRoute } from 'vue-router';

const route = useRoute();
const activeMenu = ref(false)
const isNotHomePage = computed(() => route.path != '/');

</script>

<template>
    <header class="h-16 lg:h-24 lg:px-12 px-auto w-screen lg:w-full fixed text-Blanc bg-Background font-michroma flex text-lg lg:text-xl" :class="{'! bg-gradient-to-t from-[#000000] to-Background':isNotHomePage}">
        <nav class="flex justify-between items-center w-[350px] lg:w-full mx-auto lg:mx-0 h-full">
            <RouterLink to="/">
                <p>Acceuil</p>
            </RouterLink>
            <nav class="flex gap-5">
                <button class="hidden lg:block"><span @click="lang = true" :class="{'!font-semibold':lang}">EN</span>/<span class="font-semibold" @click="lang = false" :class="{'!font-normal':lang}">FR</span></button>
                <button class="hidden lg:block" @click="activeMenu =! activeMenu">Menu</button>
                <button class="lg:hidden" @click="activeMenu =! activeMenu"><Burger/></button>
            </nav>
        </nav>
        <nav class="absolute h-screen lg:-right-12 px-5 lg:pl-12 lg:pr-24 text-right hidden nav__menu w-screen lg:w-auto" :class="{'!block':activeMenu}">
            <nav class="flex justify-between gap-5 w-auto h-40">
                <button><span @click="lang = true" :class="{'!font-semibold':lang}">EN</span>/<span class="font-semibold" @click="lang = false" :class="{'!font-normal':lang}">FR</span></button>
                <button @click="activeMenu =! activeMenu"><Croix/></button>
            </nav>
            <nav class="flex flex-col gap-12 lg:gap-10 text-center">
                <RouterLink to="/Projet" @click="activeMenu =! activeMenu">
                    <p class="text-2xl">Work</p>
                </RouterLink>
                <RouterLink to="/Projet/hzyx8uz709k7b6w" @click="activeMenu =! activeMenu">
                    <p class="text-lg">Cardeleon</p>
                </RouterLink>
                <RouterLink to="/Projet/3any1equfk6yz38" @click="activeMenu =! activeMenu">
                    <p class="text-lg">Redesign architectural</p>
                </RouterLink>
                <RouterLink to="/Projet/thxvj0r54z3ynoj" @click="activeMenu =! activeMenu">
                    <p class="text-lg">Site pour un tournois Esport</p>
                </RouterLink>
                <RouterLink to="/Projet/6ym7rewppwl81f4" @click="activeMenu =! activeMenu">
                    <p class="text-lg">Randoala</p>
                </RouterLink>
                <RouterLink to="/Mentions_Legales" @click="activeMenu =! activeMenu">
                    <p class="text-2xl">A propos</p>
                </RouterLink>
                <RouterLink to="/formulaire" @click="activeMenu =! activeMenu">
                    <p class="text-2xl">Contact</p>
                </RouterLink>
            </nav>
        </nav>
    </header>
</template>