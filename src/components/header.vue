<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <header class="flex justify-between px-5 py-2">
        <RouterLink to="/">
            <p>Acceuil</p>
        </RouterLink>
        <nav class="flex gap-5">
            <button><span>EN</span>/<span>FR</span></button>
            <button>Menu</button>
        </nav>
    </header>
</template>