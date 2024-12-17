<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="text-center" style="min-height: calc(100vh - 5rem);">
        <h1>404</h1>
        <p>Page introuvable</p>
        <RouterLink to="/"><button><p>Retourner en territoire connu</p></button></RouterLink>
    </div>
</template>