<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from './ImgPb.vue'
const projet = defineProps<ProjetsResponse<any>>()
import { RouterLink } from 'vue-router/auto';
</script>
<template>
    <div class="border-4 CardProjet" style="border-image: linear-gradient(to right, #FF007A, #FF8D1C) 60;">
        <RouterLink 
            :to="{
                name: '/Projet/[id]',
                params: { id: projet.id }
            }">
            <div class="absolute bg-gradient-to-r from-Rose to-Orange">
                <p>{{ projet.titleAlt }}</p>
            </div>
            <ImgPb
                v-if="projet.miniature"
                :record="projet"
                :filename="projet.miniature"
                class="h-[150px] lg:h-[400px] w-full object-cover"/>
        </RouterLink>
    </div>
</template>