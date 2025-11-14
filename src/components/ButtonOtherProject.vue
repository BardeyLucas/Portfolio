<script setup lang="ts">
    import { RouterLink, useRoute } from 'vue-router';
    import { computed } from 'vue';
    const route = useRoute();
    const Page_actuelle = computed(() => {
        switch (route.path) {
            case '/Projet/AutresProjets':
                return false;
            default:
                return true;
        }
    });
</script>
<template>
    <div class="text-Blanc fixed z-50 bg-[#1c0834] border-2 border-Bleu w-screen bottom-0 lg:text-2xl px-8 py-6 opacity-90 font-semibold" :class="{'!hidden':!Page_actuelle}">
        <p>Les projets les plus récents n'ont pas encore de pages apparentières dans le portfolio et seront ajouter ultérieurement. Les projets et travaux récents sont donc répértoriés
            <RouterLink to="/Projet/AutresProjets" class="">
                <button class="text-Bleu underline underline-offset-4">[ici]</button>
            </RouterLink>
        </p>
    </div>
</template>