<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LoginOut from './components/LoginOut.vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <Header/>
  <main class="bg-Background text-Blanc pt-40 font-nunito-sans">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>
  <Footer/>
</template>