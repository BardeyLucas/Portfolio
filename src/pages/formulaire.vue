<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
    import formulaire from '@/components/Formulaire.vue';
</script>
<template>
    <article class="grille">
        <h1 class="col-span-12 mt-8 pb-8 lg:pb-12 font-michroma text-xl lg:text-4xl">Formulaire de contact</h1>
        <formulaire/>
        <div class="hidden lg:block col-span-3 col-start-9 bg-Violet py-10 px-5 h-fit rounded-2xl">
            <h3 class="text-center font-michroma text-xl mb-10">Autres moyens de contacts</h3>
            <p class="mb-1">Numéro de téléphone :</p>
            <p class="mb-5">&nbsp;&nbsp;&nbsp;+33 6 32 34 98 88</p>
            <p class="mb-1">Contact par email :</p>
            <p>&nbsp;&nbsp;&nbsp;Bardey.lucas1@gmail.com</p>
        </div>
    </article>
</template>