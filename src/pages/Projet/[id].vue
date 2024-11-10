<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

import { pb } from '@/backend'
import { ref } from 'vue';
import ImgPb from '@/components/ImgPb.vue';
import { useHead } from '@unhead/vue'
import { useRoute, useRouter } from 'vue-router/auto';
import sanitizeHtml from 'sanitize-html'
import type { ProjetsResponse, UsersResponse, PageContentResponse } from '@/pocketbase-types';
const route = useRoute('/Projet/[id]')
const router = useRouter()
const projet = ref(
    await pb
        .collection<ProjetsResponse<{page_content: PageContentResponse[]}>>('Projets')
        .getOne(route.params.id, {expand: 'page_content'})
)
useHead({
    title: () => `Projet : ${projet.value.title}`
})
console.log("Réponse du serveur:", projet.value.expand?.page_content);</script>
<template>
    <div class="grille pb-12 font-michroma text-6xl">
        <h1 class="col-span-12">{{ projet.title }}</h1>
    </div>
    <ImgPb class="w-[100vw] max-w-[100vw]"
            v-if="projet.cover"
            :record="projet"
            :filename="projet.cover"/>
    <article class="grille">
        <div class="col-span-12 text-center lg:flex justify-between">
            <p>Année* {{ new Date(projet.date).getFullYear() }}</p>
            <p>Client* {{ projet.client }}</p>
            <a :href="projet.projectLens"><button><p>Tester le projet</p></button></a>
        </div>
        <div v-if="projet.equipe" class="col-span-12 lg:col-span-6">
            <h2>Description</h2>
            <div v-html="sanitizeHtml(projet.description)"></div>
        </div>
        <div v-else class="col-span-12 lg:col-span-8">
            <h2>Description</h2>
            <div v-html="sanitizeHtml(projet.description)"></div>
        </div>
        <div v-if="projet.equipe" class="col-span-12 lg:col-span-3 lg:col-start-7">
            <h2>Réalisations</h2>
            <div v-html="sanitizeHtml(projet.realisations)"></div>
        </div>
        <div v-else class="col-span-12 lg:col-span-3 lf:col-start-10">
            <h2>Réalisations</h2>
            <div v-html="sanitizeHtml(projet.realisations)"></div>
        </div>
        <div v-if="projet.equipe" class="col-span-12 lg:col-span-3 lf:col-start-10">
            <h2>Equipe</h2>
            <div v-html="sanitizeHtml(projet.equipe)"></div>
        </div>
        <div class="col-span-12" v-html="sanitizeHtml(projet.expand?.page_content[0].Content || '')"></div>
        <p>{{ projet.expand?.page_content[0].Test }}</p>
        <ImgPb
            v-if="projet.image_content[0]"
            :record="projet"
            :filename="projet.image_content[0]"/>
    </article>
</template>