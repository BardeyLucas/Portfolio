<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

import { pb } from '@/backend'
import { ref } from 'vue';
import ImgPb from '@/components/ImgPb.vue';
import { useHead } from '@unhead/vue'
import { useRoute, useRouter } from 'vue-router/auto';
import sanitizeHtml from 'sanitize-html'
import type { ProjetsResponse } from '@/pocketbase-types';
const route = useRoute('/Projet/[id]')
const router = useRouter()
const projet = ref(
    await pb
        .collection<ProjetsResponse>('Projets')
        .getOne(route.params.id)
)
useHead({
    title: () => `Projet : ${projet.value.title}`
})
</script>
<template>
    <div class="grille">
        <h1 class="col-span-12">{{ projet.title }}</h1>
    </div>
    <ImgPb class="w-[100vw] max-w-[100vw]"
            v-if="projet.miniature"
            :record="projet"
            :filename="projet.miniature"/>
    <article class="grille">
        <div class="col-span-12 text-center lg:flex justify-between">
            <p>Année* {{ new Date(projet.date).getFullYear() }}</p>
            <p>Client* {{ projet.client }}</p>
            <a :href="projet.projectLens"><button><p>Tester le projet</p></button></a>
        </div>
        <div v-if="projet.equipe" class="col-span-12 lg:col-span-6">
            <h2>Description</h2>
            <p>{{ projet.description }}</p>
        </div>
        <div v-else class="col-span-12 lg:col-span-8">
            <h2>Description</h2>
            <p>{{ projet.description }}</p>
        </div>
        <div v-if="projet.equipe" class="col-span-12 lg:col-span-3 lg:col-start-7">
            <h2>Réalisations</h2>
            <p>{{ projet.realisations }}</p>
        </div>
        <div v-else class="col-span-12 lg:col-span-3 lf:col-start-10">
            <h2>Réalisations</h2>
            <p>{{ projet.realisations }}</p>
        </div>
        <div v-if="projet.equipe" class="col-span-12 lg:col-span-3 lf:col-start-10">
            <h2>Réalisations</h2>
            <p>{{ projet.equipe }}</p>
        </div>
        <div v-html="sanitizeHtml(projet.page_content)"></div>
    </article>
</template>