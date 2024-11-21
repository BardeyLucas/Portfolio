<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import LoginOut from './components/LoginOut.vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <div>
    <Header :currentRoute="$route.path"/>
    <main class="bg-Background text-Blanc pt-20 lg:pt-32 font-nunito-sans">
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" :key="$route.path" />
        </Suspense>
      </RouterView>
    </main>
  </div>
  <Footer/>
</template>