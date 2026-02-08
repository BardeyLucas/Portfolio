<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import { pb } from '@/backend';
import Card_Projet from '@/components/Card_Projet.vue';
    const projetListe = await pb.collection('Projets').getFullList({
  sort: 'Order',
})
</script>
<template>
    <div class="grille">
        <img src="../../../src/components/HomeIMG/GrilleOrange.png" alt="grille orange" class="w-[60vw] hidden lg:block lg:-right-0 lg:top-52 lg:absolute"/>
        <h1 class="col-span-12 mt-8 pb-6 font-michroma text-xl lg:text-4xl">Projets mis en avant</h1>
        <nav class="relative gap-y-12 col-span-12 col12 w-full mt-2 mb-10">
        <Card_Projet v-for="unProjet in projetListe" :key="unProjet.id" v-bind="unProjet"/>
        </nav>
    </div>
</template>