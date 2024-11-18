<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Croix from './icons/Croix.vue';
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
    <header class="lg:h-40 lg:px-12 px-auto w-screen lg:w-full fixed text-Blanc bg-Background font-michroma flex lg:text-2xl" :class="{'! bg-gradient-to-t from-[#000000] to-Background':isNotHomePage}">
        <nav class="flex justify-between items-center w-[350px] lg:w-full mx-auto lg:mx-0 h-full">
            <RouterLink to="/">
                <p>Acceuil</p>
            </RouterLink>
            <nav class="flex gap-5">
                <button><span @click="lang = true" :class="{'!font-semibold':lang}">EN</span>/<span class="font-semibold" @click="lang = false" :class="{'!font-normal':lang}">FR</span></button>
                <button @click="activeMenu =! activeMenu">Menu</button>
            </nav>
        </nav>
        <nav class="absolute h-screen -right-12 pl-12 pr-24 text-right hidden" :class="{'!block':activeMenu}" style="margin-right: calc((100vw - 100%)/2); background: linear-gradient(to bottom, #00092a 0%, rgba(0,9,42,0.9) 30%, rgba(0,9,42,0) 100%);">
            <nav class="flex justify-between gap-5 w-auto h-40">
                <button><span @click="lang = true" :class="{'!font-semibold':lang}">EN</span>/<span class="font-semibold" @click="lang = false" :class="{'!font-normal':lang}">FR</span></button>
                <button class="block lg:hidden" @click="activeMenu =! activeMenu">Menu</button>
                <button class="hidden lg:block" @click="activeMenu =! activeMenu"><Croix/></button>
            </nav>
            <nav class="flex flex-col gap-7">
                <RouterLink to="/Projet">
                    <p>Work</p>
                </RouterLink>
                <RouterLink to="/Projet/hzyx8uz709k7b6w">
                    <p>Cardeleon</p>
                </RouterLink>
                <RouterLink to="/Projet/3any1equfk6yz38">
                    <p>Redesign architectural</p>
                </RouterLink>
                <RouterLink to="/Projet">
                    <p>Site pour un tournois Esport</p>
                </RouterLink>
                <RouterLink to="/Projet/6ym7rewppwl81f4">
                    <p>Randoala</p>
                </RouterLink>
                <RouterLink to="/Mentions_Legales">
                    <p>A propos</p>
                </RouterLink>
                <RouterLink to="/formulaire">
                    <p>Contact</p>
                </RouterLink>
            </nav>
        </nav>
    </header>
</template>