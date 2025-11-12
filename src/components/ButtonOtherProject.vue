<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="text-Blanc fixed z-50 bg-[#1c0834] border-2 border-Bleu w-screen bottom-0 lg:text-2xl px-5 py-4 opacity-90">
        <p>Les projets les plus récents n'ont pas encore de pages apparentières dans le portfolio et seront ajouter ultérieurement. Les projets et travaux récents sont donc répértoriés
            <RouterLink to="/Projet/AutresProjets" class="">
                <button class="text-Bleu underline underline-offset-4">[ici]</button>
            </RouterLink>
        </p>
    </div>
</template>