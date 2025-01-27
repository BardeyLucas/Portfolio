<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoFondSombre from '@/components/icons/LogoFondSombre.vue';
</script>
<template>
    <img src="../../src/components/HomeIMG/GrilleOrange.png" alt="grille orange" class="w-[60vw] hidden lg:block lg:-left-40 lg:-mt-20 lg:opacity-70 lg:absolute "/>
    <img src="../../src/components/HomeIMG/GrilleRose.png" alt="grille rose" class="w-[50vw] hidden lg:block lg:right-0 lg:-pb-40 lg:absolute "/>
    <div class="text-center flex items-center justify-center relative" style="min-height: calc(100vh - 5rem);">
        <div>
            <LogoFondSombre class="w-20 mx-auto h-auto mb-5"/>
            <h1 class="font-michroma text-2xl mb-2">Page introuvable.</h1>
            <p class="mb-5">La page que vous rechercher n'existe pas.</p>
            <RouterLink to="/"><button class="bg-Violet hover:bg-[#9d2e89] active:bg-[#ad4a9b] transition-colors duration-100 px-4 py-1.5 rounded-xl"><p>Retourner à la page d'accueil</p></button></RouterLink>
        </div>
    </div>
</template>