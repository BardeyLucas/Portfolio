<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from './ImgPb.vue'
const projet = defineProps<ProjetsResponse<any>>()
import { RouterLink } from 'vue-router/auto';
</script>
<template>
    <div class="CardProjet rounded-3xl overflow-hidden bg-gradient-to-r from-Rose to-Orange">
        <div class="border-4" style="border-image: linear-gradient(to right, #FF007A, #FF8D1C);">
            <RouterLink
                :to="{
                    name: '/Projet/[id]',
                    params: { id: projet.id }
                }">
                <div class="absolute bg-gradient-to-r from-Rose to-Orange px-3 rounded-tl-[1.25rem]">
                    <p class="">{{ projet.titleAlt }}</p>
                </div>
                <ImgPb
                    v-if="projet.miniature"
                    :record="projet"
                    :filename="projet.miniature"
                    class="h-[150px] lg:h-[250px] w-full object-cover rounded-[1.25rem] overflow-hidden"/>
            </RouterLink>
        </div>
    </div>
</template>