<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import { useRoute, RouterLink } from 'vue-router';
const route = useRoute('/Projet/[id]')
const projet = await pb.collection('')
</script>
<template>
    <h1>Choix projet</h1>
    <nav>
        <ul>
            <li><RouterLink to="/test">Test</RouterLink></li>
        </ul>
    </nav>
</template>