<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Croix from './icons/Croix.vue';
import Burger from './icons/Burger.vue';
import LogoFondSombre from './icons/LogoFondSombre.vue';
// const language = reactive({
//   lang: false, // false pour FR, true pour EN
// });
const lang = ref(false)
import { useRoute } from 'vue-router';
const route = useRoute();
const activeMenu = ref(false)
const Page_actuelle = computed(() => {
    switch (route.path) {
        case '/':
            return false;
        default:
            return true;
    }
});
</script>

<template>
    <header class="h-16 lg:h-24 lg:px-12 px-auto w-screen lg:w-full fixed text-Blanc bg-[#1c0834] font-michroma flex text-lg lg:text-xl z-50" :class="{'!bg-gradient-to-t from-[#000000] to-Background':Page_actuelle}">
        <nav class="flex justify-between items-center w-[350px] lg:w-full mx-auto lg:mx-0 h-full">
            <RouterLink to="/" class="flex justify-between gap-5">
                <LogoFondSombre class="h-10 lg:h-12 w-auto"/>
                <p class="w-auto my-auto">Lucas Bardey</p>
            </RouterLink>
            <nav class="flex gap-5">
                <!-- <button class="hidden lg:block"><span @click="lang = true" :class="{'!font-semibold':lang}">EN</span>/<span class="font-semibold" @click="lang = false" :class="{'!font-normal':lang}">FR</span></button> -->
                <button class="hidden lg:block" @click="activeMenu =! activeMenu">Menu</button>
                <button class="lg:hidden" @click="activeMenu =! activeMenu"><Burger/></button>
            </nav>
        </nav>
        <nav class="absolute h-screen lg:-right-12 px-5 lg:pl-12 lg:pr-24 text-right hidden nav__menu w-screen lg:w-auto"  v-scroll-lock="activeMenu" :class="{'!block':activeMenu}">
            <nav class="flex justify-end gap-20 w-auto h-40">
                <!-- <button><span @click="lang = true" :class="{'!font-semibold':lang}">EN</span>/<span class="font-semibold" @click="lang = false" :class="{'!font-normal':lang}">FR</span></button> -->
                <button @click="activeMenu =! activeMenu"><Croix/></button>
            </nav>
            <nav class="flex flex-col mt-20 lg:mt-0 gap-12 lg:gap-10 text-center lg:text-right">
                <RouterLink to="/Projet" @click="activeMenu =! activeMenu">
                    <p class="text-xl hover:opacity-70 active:opacity-50" onclick="window.scrollTo(0, 0);">Travaux</p>
                </RouterLink>
                <RouterLink to="/Mentions_Legales" @click="activeMenu =! activeMenu">
                    <p class="text-xl hover:opacity-70 active:opacity-50" onclick="window.scrollTo(0, 0);">À-propos</p>
                </RouterLink>
                <RouterLink to="/formulaire" @click="activeMenu =! activeMenu">
                    <p class="text-xl hover:opacity-70 active:opacity-50" onclick="window.scrollTo(0, 0);">Contact</p>
                </RouterLink>
            </nav>
        </nav>
    </header>
</template>