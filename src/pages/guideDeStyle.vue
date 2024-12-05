<script setup lang="ts">
import PalmiersDroite from '@/components/HomeIMG/Palmiers-Droite.vue';
import PalmiersGauche from '@/components/HomeIMG/Palmiers-Gauche.vue';
</script>

<template>
    <div class="bg-Bleu">
    <h1 class="text-Water">Guide de style</h1>
    <div class="absolute flex gap-16 w-full z-40 justify-between bg-Bleu" style="margin-bottom: calc(10vh + (94/1920)*100%); height: calc(185px + (339px / (100vw - 375px))); width: 100%;">
        <PalmiersGauche class="HomePage__Palmiers min-w-[185px] max-w-[375px]"/>
        <PalmiersDroite class="HomePage__Palmiers min-w-[185px] max-w-[375px]"/>
    </div>
    </div>
</template>