<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const lang = ref(false)
</script>
<template>
    <header class="flex justify-between px-5 py-2">
        <RouterLink to="/">
            <p>Acceuil</p>
        </RouterLink>
        <nav class="flex gap-5">
            <button><span @click="lang = true" :class="{'!font-semibold':lang}">EN</span>/<span class="font-semibold" @click="lang = false" :class="{'!font-normal':lang}">FR</span></button>
            <button>Menu</button>
        </nav>
    </header>
</template>