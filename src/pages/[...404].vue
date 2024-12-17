<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <h1>404</h1>
    <p>Page introuvable</p>
    <RouterLink to="/"><button><p>Retourner en territoire connu</p></button></RouterLink>
</template>