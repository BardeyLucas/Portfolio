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
        <h1 class="col-span-12 mt-8 pb-6 font-michroma text-xl lg:text-4xl">Projets mises en avant</h1>
        <nav class="gap-y-12 col-span-12 col12 w-full mt-2 mb-10">
        <Card_Projet v-for="unProjet in projetListe" :key="unProjet.id" v-bind="unProjet"/>
        </nav>
    </div>
</template>