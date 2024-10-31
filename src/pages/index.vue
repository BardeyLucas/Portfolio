<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import { RouterLink } from 'vue-router'
import Button from '../components/btnProjetDefault.vue'
import Card from '@/components/CardTemporaire.vue'
const projetListe = await pb.collection('Projets').getFullList()
// const route = useRoute('/Projet/[id]')
// const projet = await pb.collection('')
console.log(projetListe)
</script>
<template>
  <section class="col-span-12">
    <h1>Lucas Bardey</h1>
  </section>
  <section class="col-span-12">
    <h2>Projet</h2>
  </section>
  <section class="col-span-12">
    <h2>Présentation</h2>
    <p>
      Bonjour, je m'appelle Lucas Bardey, j’ai 20 ans et j’étudie actuellement en France en section
      Métiers du Multimédia et de l’Internet, avec une spécialisation en développement web.
    </p>

    <p>
      Durant mes études, j’ai développé un large éventail de compétences, allant du développement
      web au graphisme, en passant par la communication. Cette polyvalence me permet d’aborder les
      projets sous plusieurs angles, que ce soit en conception technique ou visuelle.
    </p>

    <p>
      Aujourd’hui, je m’épanouis dans la création de sites web. À plus long terme, mon ambition est
      de devenir diplômé en développement web et en développement de jeux vidéo, deux secteurs qui
      me passionnent et qui contribueront à bâtir mon avenir professionnel.
    </p>
  </section>
  <section class="col-span-12">
    <h2>compétences</h2>
  </section>
</template>
