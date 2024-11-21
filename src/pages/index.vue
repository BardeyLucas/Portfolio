<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import Card_Projet from '@/components/Card_Projet.vue'
import { RouterLink } from 'vue-router'
import Button from '../components/btnProjetDefault.vue'
import Card from '@/components/CardTemporaire.vue'
import { onRenderTracked } from 'vue'
import Html from '@/components/html.vue'
import Css from '@/components/css.vue'
import Javascript from '@/components/javascript.vue'
import VueJS from '@/components/vueJS.vue'
import Figma from '@/components/figma.vue'
import Illustrator from '@/components/Illustrator.vue'
const projetListe = await pb.collection('Projets').getFullList({
  sort: 'Order',
})
// const route = useRoute('/Projet/[id]')
// const projet = await pb.collection('')
</script>
<template>
  <article class="grille">
  <section class="col-span-12" style="height: calc(100vh - 70px);">
    <div class="col12">
      <h1 class="font-michroma text-4xl lg:text-6xl col-span-8 lg:col-span-4 col-start-3 lg:col-start-5 text-center">Lucas Bardey</h1>
    </div>
  </section>
  <section class="col-span-12 pb-20">
    <h2 class="font-michroma text-xl lg:text-3xl mt-12 mb-8">Projet</h2>
    <nav>
      <Card_Projet v-for="unProjet in projetListe" :key="unProjet.id" v-bind="unProjet"/>
    </nav>
  </section>
  <section class="col-span-12 col12 lg:pb-18">
    <h2 class="col-span-12 font-michroma text-xl lg:text-3xl mt-6 lg:mt-12 mb-6 lg:mb-12">Présentation</h2>
    <p class="lg:text-xl col-start-2 col-span-10 lg:col-span-8 mb-5 lg:mb-10">
      Bonjour, je m'appelle Lucas Bardey, j’ai 20 ans et j’étudie actuellement en France en section
      Métiers du Multimédia et de l’Internet, avec une spécialisation en développement web.
    </p>

    <p class="lg:text-xl col-start-2 col-span-10 lg:col-span-8 mb-5 lg:mb-10">
      Durant mes études, j’ai développé un large éventail de compétences, allant du développement
      web au graphisme, en passant par la communication. Cette polyvalence me permet d’aborder les
      projets sous plusieurs angles, que ce soit en conception technique ou visuelle.
    </p>

    <p class="lg:text-xl col-start-2 col-span-10 lg:col-span-8">
      Aujourd’hui, je m’épanouis dans la création de sites web. À plus long terme, mon ambition est
      de devenir diplômé en développement web et en développement de jeux vidéo, deux secteurs qui
      me passionnent et qui contribueront à bâtir mon avenir professionnel.
    </p>
  </section>
  <section class="col-span-12 col12 pb-10 lg:pb-20">
    <h2 class="col-span-12 font-michroma text-xl lg:text-3xl mt-14 lg:mb-12">compétences</h2>
    <div class="col-span-2 col-start-1 lg:col-start-2 h-32 flex items-center">
    <Html class="w-20"/>
    <p class="hidden">HTML</p>
    </div>
    <div class="col-span-2 col-start-4 lg:col-start-4 h-32 flex items-center">
    <Css class="w-20"/>
    <p class="hidden">CSS</p>
    </div>
    <div class="col-span-2 col-start-7 lg:col-start-6 h-32 flex items-center"> 
    <Javascript class="w-20"/>
    <p class="hidden">Javascript</p>
    </div> 
    <div class="col-span-2 col-start-10 lg:col-start-8 h-32 flex items-center">
    <VueJS class="w-20"/>
    <p class="hidden">VUEJS</p>
    </div>
    <div class="col-span-3 col-start-4 lg:col-start-3 lg:mt-24 lg:h-32 flex items-center">
    <Figma class="w-[230px]"/>
    <p class="hidden">Figma</p>
    </div>
    <div class="col-span-2 col-start-8 lg:col-start-7 lg:mt-24 lg:h-32 flex items-center">
    <Illustrator class="w-20"/>
    <p class="hidden">Illustrator</p>
    </div>
  </section>
</article>
</template>
