<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import { ref } from 'vue';
import { useHead } from '@unhead/vue'
import { useRoute, useRouter } from 'vue-router/auto';
import sanitizeHtml from 'sanitize-html'
import type { ProjetsResponse } from '@/pocketbase-types';
const route = useRoute('/Projet/[id]')
const router = useRouter()
const Projet = ref(
    await pb
        .collection<ProjetsResponse>('Projet')
        .getOne(route.params.id)
)
useHead({
    title: () => `Projet : ${Projet.value.title}`
})
</script>
<template>
    <p>projet</p>
</template>