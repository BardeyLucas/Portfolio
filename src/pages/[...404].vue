<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoFondSombre from '@/components/icons/LogoFondSombre.vue';
</script>
<template>
    <div class="text-center flex items-center justify-center" style="min-height: calc(100vh - 5rem);">
        <div>
            <LogoFondSombre class="w-20 mx-auto h-auto mb-5"/>
            <h1 class="font-michroma text-2xl mb-2">Page introuvable.</h1>
            <p class="mb-5">La page que vous rechercher n'existe pas.</p>
            <RouterLink to="/"><button class="bg-Violet px-4 py-1.5 rounded-xl"><p>Retourner à la page d'accueil</p></button></RouterLink>
        </div>
    </div>
</template>