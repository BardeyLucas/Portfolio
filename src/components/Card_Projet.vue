<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from './ImgPb.vue'
const projet = defineProps<ProjetsResponse<any>>()
import { RouterLink } from 'vue-router/auto';
</script>
<template>
    <RouterLink 
        :to="{
            name: '/Projet/[id]',
            params: { id: projet.id }
        }">
        <p>{{ projet.titleAlt }}</p>
        <ImgPb
            v-if="projet.miniature"
            :record="projet"
            :filename="projet.miniature"/>
    </RouterLink>
</template>