<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from './ImgPb.vue'
const projet = defineProps<ProjetsResponse<any>>()
import { RouterLink } from 'vue-router/auto';
import TriangleDecoration from './HomeIMG/TriangleDecoration.vue';
</script>
<template>
    <!-- <div class="CardProjet rounded-3xl overflow-hidden bg-gradient-to-r from-Rose to-Orange"> -->
    <div class="CardProjet rounded-xl font-michroma">
        <div class="absolute bg-gradient-to-r from-Rose to-Orange px-3 rounded-tl-xl flex">
            <p class="leading-7 w-auto">{{ projet.titleAlt }}</p>
            <TriangleDecoration class="absolute h-[1.75rem] border-l-Orange border-l-2" style="margin-left: calc(100% - 12.3px);"/>
        </div>
        <ImgPb
            v-if="projet.miniature"
            :record="projet"
            :filename="projet.miniature"
            class="h-[150px] lg:h-[250px] w-full object-cover rounded-xl overflow-hidden block" alt="Image du projet"/>
        <RouterLink
            :to="{
                name: '/Projet/[id]',
                params: { id: projet.id }
            }" class="">
            <button   class="bg-gradient-to-r from-Rose to-Orange bg-[length:200%_100%] transition-all duration-500 hover:bg-[100%_0%] h-[1.8rem] px-5 rounded-lg block mx-auto mt-[-0.5rem] z-10 relative text-sm">Voir plus</button>
        </RouterLink>
    </div>
</template>