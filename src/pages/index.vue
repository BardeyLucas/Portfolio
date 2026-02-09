<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import Card_Projet from '@/components/Card_Projet.vue'
import { RouterLink } from 'vue-router'
import Button from '../components/btnProjetDefault.vue'
import { onRenderTracked } from 'vue'
import Html from '@/components/html.vue'
import Css from '@/components/css.vue'
import Javascript from '@/components/javascript.vue'
import VueJS from '@/components/vueJS.vue'
import Figma from '@/components/figma.vue'
import Illustrator from '@/components/Illustrator.vue'
import nuxtJs from '@/components/nuxt-js.vue'
import sanity from '@/components/sanity.vue'
import Unreal_Engine from '@/components/Unreal_Engine.vue'
import Plage from '@/components/HomeIMG/Plage.vue'
import Soleil from '@/components/HomeIMG/Soleil.vue'
import SoleilLight from '@/components/HomeIMG/Soleil&Light.vue'
import Motif from '@/components/HomeIMG/Motif.png'
import PalmiersGauche from '@/components/HomeIMG/Palmiers-Gauche.vue'
import ParliersDroite from '@/components/HomeIMG/Palmiers-Droite.vue'
import PalmiersDroite from '@/components/HomeIMG/Palmiers-Droite.vue'
import NuxtJs from '@/components/nuxt-js.vue'
import Sanity from '@/components/sanity.vue'
const projetListe = await pb.collection('Projets').getFullList({
  sort: 'Order',
})
// const route = useRoute('/Projet/[id]')
// const projet = await pb.collection('')
// test pour suppr bug
</script>
<template>
  <section class="col-span-12">
    <div class="absolute z-40 w-full flex HomePage__Title">
      <h1 class="font-michroma text-4xl lg:text-6xl col-span-8 lg:col-span-4 col-start-3 lg:col-start-5 text-center mx-auto my-auto">Lucas<br/>Bardey</h1>
    </div>
    <div class="flex flex-col justify-end HomePage__Height">
      <div class="absolute w-full h-10" style="height: 100%; background: linear-gradient(to bottom, #1c0834 30%, #3d146f 72%, #8a0c73 81%);"></div>
      <div class="absolute w-full h-10 z-10" style="height: 100%; background: radial-gradient(100% 50% at 50% 50%, rgba(28.000000230968, 8.000000473111868, 52.000000700354576, 0.5) 65.62365889549255%, rgba(0, 0, 0, 0) 100%);"></div>
      <div class="absolute w-full z-10 flex flex-col justify-end pb-[10vh] lg:pb-0">
        <!-- <Soleil class="mx-auto" style="width: calc(200px + ((100% - 375px)*0.32)); margin-bottom: calc((110/1920)*100% - 1% + 10vh);"/> -->
        <SoleilLight class="absolute" style="width: calc(286px + ((100% - 375px)*0.46)) ; left: calc(50% - calc(286px + ((100% - 375px)*0.46))/2); margin-bottom: calc(10vh + (94/1920)*100%);"/>
      </div>
      <div class="absolute HomePage__Palmiers flex gap-x-16 z-40 w-full justify-between" >
        <PalmiersGauche class="max-h-[375px]"/>
        <PalmiersDroite class="max-h-[375px]"/>
      </div>
      <Plage class="w-full z-40 -mb-[0.2px]"/>
      <div class="bg-Background w-full h-[20vh] lg:h-[10vh] z-40 border-8 border-Background"></div>
      <img class="w-full absolute z-40 object-fill HomePage__Floor" src="../components/HomeIMG/Motif.png" alt="route" style="
      border-style: solid;
      border-bottom-width: 3px;
      border-image: linear-gradient(90deg, rgba(0,178,255,0.2) 0%, rgba(0,178,255,0.8) 20%, rgba(0,178,255,0.8) 80%, rgba(0,178,255,0.2) 100%) 1;"/>
    </div>
  </section>
  <article class="grille">
  <section class="col-span-12 pb-20">
    <img src="../components/HomeIMG/GrilleRose.png" alt="grille rose" class="w-[50vw] hidden lg:block lg:right-20 lg:mt-10 lg:absolute "/>
    <h2 class="font-michroma text-xl lg:text-3xl mt-12 mb-8">Projet</h2>
    <nav class="gap-y-12 col12 w-full relative">
      <Card_Projet v-for="unProjet in projetListe" :key="unProjet.id" v-bind="unProjet"/>
    </nav>
  </section>
  <section class="col-span-12 col12 lg:pb-18">
    <img src="../components/HomeIMG/GrilleOrange.png" alt="grille orange" class="w-[45vw] hidden lg:block lg:left-10 lg:-mt-20 lg:opacity-50 lg:absolute "/>
    <h2 class="col-span-12 font-michroma text-xl lg:text-3xl mt-6 lg:mt-12 mb-6 lg:mb-12">Présentation</h2>
    <p class="relative lg:text-xl col-start-2 col-span-10 lg:col-span-8 mb-5 lg:mb-10">
      Bonjour, je m’appelle Lucas Bardey, j’ai 22 ans et j’étudie actuellement en France en section Métiers du Multimédia et de l’Internet (MMI), avec une spécialisation en développement web.
    </p>

    <p class="relative lg:text-xl col-start-2 col-span-10 lg:col-span-8 mb-5 lg:mb-10">
      Au cours de mes études, j’ai développé un large éventail de compétences allant du développement web au graphisme, en passant par la communication. Cette polyvalence me permet d’aborder les projets sous différents angles, aussi bien techniques que visuels.
    </p>

    <p class="relative lg:text-xl col-start-2 col-span-10 lg:col-span-8">
      Aujourd’hui, je m’épanouis pleinement dans la création de sites web. À plus long terme, mon ambition est d’obtenir un diplôme en développement web et en développement de jeux vidéo, deux domaines qui me passionnent et qui constituent les fondations de mon avenir professionnel.
    </p>
  </section>
  <section class="col-span-12 col12 pb-10 lg:pb-20">
    <img src="../components/HomeIMG/GrilleBleu.png" alt="grille bleu" class="w-[50vw] hidden lg:block lg:right-0 lg:-mt-60 lg:absolute "/>
    <h2 class="col-span-12 font-michroma text-xl lg:text-3xl mt-14 lg:mb-12">Compétences</h2>
    <div class="col-span-2 col-start-1 lg:col-start-2 flex flex-col justify-end items-center text-center z-10 mt-6">
    <Html class="w-12 lg:w-20"/>
    <p class="text-White">HTML</p>
    </div>
    <div class="col-span-2 col-start-4 lg:col-start-4 flex flex-col justify-end items-center text-center z-10 mt-6">
    <Css class="w-12 lg:w-20"/>
    <p class="text-White">CSS</p>
    </div>
    <div class="col-span-2 col-start-7 lg:col-start-6 flex flex-col justify-end items-center text-center z-10 mt-6"> 
    <Javascript class="w-12 lg:w-20"/>
    <p class="text-White">JavaScript</p>
    </div> 
    <div class="col-span-2 col-start-10 lg:col-start-8 flex flex-col justify-end items-center text-center z-10 mt-6">
    <VueJS class="w-12 lg:w-20"/>
    <p class="text-White">Vue.JS</p>
    </div>
    <div class="col-span-2 col-start-3 lg:col-start-10 flex flex-col justify-end items-center text-center z-10 mt-6">
    <NuxtJs class="w-12 lg:w-20"/>
    <p class="text-White">Nuxt.js</p>
    </div>
    <div class="col-span-5 lg:col-span-3 col-start-6 lg:col-start-2 lg:mt-24 flex flex-col justify-end items-center text-center z-10 mt-6">
    <Sanity class="my-auto lg:w-[200px] xl:w-[230px]"/>
    <p class="hidden">Sanity</p>
    </div>
    <div class="col-start-1 col-span-5 lg:col-span-3 lg:col-start-5 lg:mt-24 flex flex-col justify-end items-center text-center z-10 mt-6">
    <Figma class="my-auto lg:w-[200px] xl:w-[230px]"/>
    <p class="hidden">Figma</p>
    </div>
    <div class="col-span-3 lg:col-span-2 col-start-7 lg:col-start-8 lg:mt-24 flex flex-col justify-end items-center text-center z-10 mt-6">
    <Unreal_Engine class="lg:w-28 xl:w-32"/>
    <p class="hidden">Unreal engine</p>
    </div>
    <div class="col-span-2 col-start-11 lg:col-start-10 lg:col-start-10 lg:mt-24 flex flex-col justify-end items-center text-center z-10 mt-6">
    <Illustrator class="w-12 lg:w-20"/>
    <p class="text-White">Illustrator</p>
    </div>
  </section>
</article>
</template>
