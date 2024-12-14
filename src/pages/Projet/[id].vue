<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import { computed, ref } from 'vue'
import ImgPb from '@/components/ImgPb.vue'
import { useHead } from '@unhead/vue'
import { useRoute, useRouter } from 'vue-router/auto'
import sanitizeHtml from 'sanitize-html'
import type { ProjetsResponse, UsersResponse, PageContentResponse } from '@/pocketbase-types'
const route = useRoute('/Projet/[id]')
const Page_actuelle = computed(() => {
    switch (route.path) {
        //Cardeleon
        case '/Projet/hzyx8uz709k7b6w':
            return 0;
        //Architecture
        case '/Projet/3any1equfk6yz38':
            return 1;
        //Tournois Esport
        case '/Projet/thxvj0r54z3ynoj':
            return 2;
        //Randoala
        case '/Projet/6ym7rewppwl81f4':
            return 3;
        default:
            return true;
    }
});
const projet = ref(
  await pb
    .collection<ProjetsResponse<{ Page_content: PageContentResponse[] }>>('Projets')
    .getOne(route.params.id, { expand: 'Page_content' })
)
console.log({ ...projet.value })
// const Page_content_list = await Promise.all(
//   projet.value.Page_content.map(async (id) => await pb.collection('Page_content').getOne(id))
// )
//console.log(Page_content_list)

useHead({
  title: () => `Projet : ${projet.value.title}`
})
// console.log(projet.value.expand?.page_content.Test)
</script>
<template>
  <div class="grille mt-8 pb-6 font-michroma text-xl lg:text-4xl">
    <h1 class="col-span-12">{{ projet.title }}</h1>
  </div>
  <ImgPb
    class="max-w-full mx-auto block lg:hidden"
    v-if="projet.cover"
    :record="projet"
    :filename="projet.cover"
  />
  <ImgPb
    class="max-w-full mx-auto hidden lg:block"
    style="max-height: calc(100vh - 24rem);"
    v-if="projet.cover_desktop"
    :record="projet"
    :filename="projet.cover_desktop"
  />
  <article>
    <section class="grille pb-12">
      <div
        class="col-span-12 h-16 lg:h-24 text-center flex flex-row justify-between items-center bg-gradient-to-t from-Violet/50 to-Violet px-5 lg:px-12 mt-6 lg:mt-12 rounded-xl lg:rounded-[50px] font-michroma text-xs lg:text-xl mb-6 lg:mb-12 py-5 lg:py-0"
      >
        <p><span class="font-extrabold lg:font-normal">Année :</span> {{ new Date(projet.date).getFullYear() }}</p>
        <p><span class="font-extrabold lg:font-normal">Client :</span> {{ projet.client }}</p>
        <a :href="projet.projectLens"
          ><button><p>Tester le projet</p></button></a
        >
      </div>
      <div v-if="projet.equipe" class="col-span-12 lg:col-span-6">
        <h2 class="font-michroma text-lg lg:text-2xl mb-4">Description</h2>
        <div class="flex flex-col gap-3" v-html="sanitizeHtml(projet.description)"></div>
      </div>
      <div v-else class="col-span-12 lg:col-span-8">
        <h2 class="font-michroma text-lg lg:text-2xl mb-4">Description</h2>
        <div class="flex flex-col gap-3" v-html="sanitizeHtml(projet.description)"></div>
      </div>
      <div v-if="projet.equipe" class="col-span-12 lg:col-span-3 lg:col-start-7 mt-12 lg:mt-0">
        <h2 class="font-michroma text-lg lg:text-2xl mb-4">Réalisations</h2>
        <div class="leading-8" v-html="sanitizeHtml(projet.realisations)"></div>
      </div>
      <div v-else class="col-span-12 lg:col-span-4 lf:col-start-10 mt-12 lg:mt-0">
        <h2 class="font-michroma text-lg lg:text-2xl mb-4">Réalisations</h2>
        <div class="leading-8" v-html="sanitizeHtml(projet.realisations)"></div>
      </div>
      <div v-if="projet.equipe" class="col-span-12 lg:col-span-3 lf:col-start-10 mt-12 lg:mt-0">
        <h2 class="font-michroma text-lg lg:text-2xl mb-4">Equipe</h2>
        <div class="leading-8" v-html="sanitizeHtml(projet.equipe)"></div>
      </div>
    </section>
    <section class="grille">
      <div
        v-if="Page_actuelle == 1"
        class="col-span-8 col-start-3 Projet__RichEditor"
        v-html="sanitizeHtml(projet.expand?.Page_content[0].Content || '')"
      ></div>
    <div class="col-span-12 col12">
        <ImgPb class="mb-4 w-full" v-if="projet.image_content[0]" :record="projet" :filename="projet.image_content[0]" :class="{'lg:col-span-8 lg:col-start-3 w-full':Page_actuelle == 1 || Page_actuelle == 2, 'col-span-6':Page_actuelle == 0 || Page_actuelle == 3}" />
        <ImgPb class="mb-4 w-full " v-if="projet.image_content[1] && (Page_actuelle == 0 || Page_actuelle == 1 || Page_actuelle == 3)" :record="projet" :filename="projet.image_content[1]" :class="{'col-span-6':Page_actuelle == 0 || Page_actuelle == 3, 'lg:col-span-8 lg:col-start-3':Page_actuelle==1}"/>
      </div>
    <div
        v-if="(Page_actuelle == 0 || Page_actuelle == 2 || Page_actuelle == 3)"
        class="col-span-12 mb-4 Projet__RichEditor" :class="{'lg:col-span-8 lg:col-start-3':Page_actuelle == 2}"
        v-html="sanitizeHtml(projet.expand?.Page_content[0].Content || '')"
      ></div>
    <div
        v-if="Page_actuelle == 1"
        class="col-span-8 col-start-3 Projet__RichEditor"
        v-html="sanitizeHtml(projet.expand?.Page_content[1].Content || '')"
      ></div>
    <div class="col-span-12" :class="{'col12':Page_actuelle == 1 || Page_actuelle == 0 || Page_actuelle == 3}">
      <ImgPb v-if="projet.image_content[2]" :record="projet" :filename="projet.image_content[2]" :class="{'col-span-6 lg:col-span-4':Page_actuelle == 0,'col-span-6 lg:col-start-3 lg:col-span-4':Page_actuelle == 1, 'lg:col-span-4':Page_actuelle == 0, 'col-start-2 col-span-10 lg:col-start-3 lg:col-span-5':Page_actuelle==3}"/>
      <ImgPb v-if="projet.image_content[3]" :record="projet" :filename="projet.image_content[3]" :class="{'col-span-6 lg:col-span-4':Page_actuelle == 1 ||Page_actuelle == 0, 'lg:col-span-4':Page_actuelle == 0, 'hidden lg:block col-span-3 h-full':Page_actuelle==3}"/>
      <ImgPb v-if="projet.image_content[4] && Page_actuelle==3" class="col-span-12" :record="projet" :filename="projet.image_content[4]" :class="{'block lg:hidden':Page_actuelle==3}"/>
      <div v-if="Page_actuelle == 0" :class="{'col-span-12 lg:col-span-4':Page_actuelle == 0}">
        <ImgPb v-if="projet.image_content[4]" class="hidden lg:block w-full" :record="projet" :filename="projet.image_content[4]"/>
        <ImgPb v-if="projet.image_content[7]" class="block lg:hidden w-full" :record="projet" :filename="projet.image_content[7]"/>
      </div>
      <iframe v-if="Page_actuelle == 2" class="h-[700px]" style="border: 1px solid rgba(0, 0, 0, 0.1); min-width: calc(240px + 6.875rem); width: 800px; max-width: 100%; margin-left: auto; margin-right: auto; margin-bottom: 3rem;" height="450" src="https://embed.figma.com/proto/KeiPtgXQf0dFemlkbuQkuD/SAE301-Lucas-BARDEY?node-id=7003-73&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=899%3A4031&starting-point-node-id=7003%3A73&embed-host=share" allowfullscreen></iframe>
    </div>
    <div
        v-if="(Page_actuelle == 0)"
        class="col-span-12 Projet__RichEditor"
        v-html="sanitizeHtml(projet.expand?.Page_content[1].Content || '')"
      ></div>
    <div
        v-if="Page_actuelle == 1"
        class="col-span-8 col-start-3 Projet__RichEditor"
        v-html="sanitizeHtml(projet.expand?.Page_content[2].Content || '')"
      ></div>
    <div class="col-span-12" :class="{'col12':Page_actuelle == 1}">
      <ImgPb v-if="projet.image_content[4] && Page_actuelle == 1" :record="projet" :filename="projet.image_content[4]" :class="{'col-span-6 lg:col-start-3 lg:col-span-4':Page_actuelle == 1}"/>
      <ImgPb v-if="projet.image_content[5] && Page_actuelle == 1" :record="projet" :filename="projet.image_content[5]" :class="{'col-span-6 lg:col-span-4':Page_actuelle == 1}"/>
    </div>
    <div v-if="Page_actuelle == 0" class="col-span-12 col12">
      <div class="col-start-2 col-span-10 lg:col-start-1 lg:col-span-6 flex flex-col items-center">
        <ImgPb v-if="projet.image_content[5]" :record="projet" :filename="projet.image_content[5]"/>
        <a href="https://cardeleon.lucas-bardey.fr/">
          <button class="bg-Violet border-Rose border font-michroma rounded-lg lg:text-lg py-1 px-5">
            <p>Lancer la landing page</p>
          </button>
        </a>
      </div>
      <div class="col-start-2 col-span-10 lg:col-span-6 flex flex-col items-center">
        <ImgPb v-if="projet.image_content[6]" :record="projet" :filename="projet.image_content[6]"/>
        <a href="https://cardeleon1.lucas-bardey.fr/">
          <button class="bg-Violet border-Rose border font-michroma rounded-lg lg:text-lg py-1 px-5">
            <p>Lancer le site</p>
          </button>
        </a>
      </div>
    </div>
    <div v-if="Page_actuelle == 1" class="col-span-12 col12">
      <div
        v-if="Page_actuelle == 1"
        class="col-span-8 col-start-3 Projet__RichEditor"
        v-html="sanitizeHtml(projet.expand?.Page_content[3].Content || '')"
      ></div>
      <ImgPb v-if="projet.image_content[6]" class="col-span-8 col-start-3" :record="projet" :filename="projet.image_content[6]"/>
    </div>
    </section>
  </article>
</template>
