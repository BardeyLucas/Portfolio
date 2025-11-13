<script setup lang="ts">
// @ts-ignore: declaration file for .vue modules is missing
import ProjectPresentation from '@/components/ProjectPresentation.vue';
</script>

<template>
    <section class="grille">
        <h1 class="col-span-12 mt-8 pb-8 font-michroma text-xl lg:text-4xl">Les projets les plus récents</h1>
        <section class="col-span-12 flex flex-col gap-y-12 mb-20">
            <ProjectPresentation Image="1" Title="SMASH ARENA EVENT 2éme édition | 2025" Description="Description du projet" Direction="" Param1="Tournoi Esport" Param2="Projet collectif" Param3="Organisation Evenementiel" Param4="Développement d'un site promotionnel" Param5="Communication" Outil1="Figma" Outil2="Vs code" Outil3="Suite Google" Outil4="Premiere Pro" Outil5="After Effects"/>
            <ProjectPresentation Image="2" Title="Stage d'infographiste à la mairie de Sainte Suzanne" Description="Description du projet" Direction="reverse"/>
        </section>
    </section>
</template>