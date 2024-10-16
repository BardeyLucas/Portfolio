<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import { RouterLink } from 'vue-router';
import Button from '../components/btnProjetDefault.vue'
import Card from '@/components/CardTemporaire.vue'
const projetListe = await pb.collection('Projets').getFullList();
// const route = useRoute('/Projet/[id]')
// const projet = await pb.collection('')
console.log(projetListe)
</script>
<template>
    <h1>Choix projet</h1>
    <nav>
        <ul>
            <li><RouterLink to="/test"><Button Text="test" /></RouterLink></li>
        </ul>
        <section>
            <Card v-for="unProjet in projetListe" :key="unProjet.id" v-bind="unProjet"/>
        </section>
    </nav>
</template>