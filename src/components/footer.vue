<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import BackArrow from './icons/Retour-en-arriere.vue';
</script>
<template>
    <footer class="bg-Background border-t-Rose border-t text-Blanc">
        <div class="grille pb-5">
            <div class="col-start-3 col-span-8 lg:col-start-2 lg:col-span-2 text-center lg:text-left">
                <h3 class="flex items-center justify-center mt-12 mb-6 lg:my-0 lg:h-24 font-michroma text-lg lg:text-2xl">Contacts</h3>
                <nav class="gap-y-3 flex flex-col lg:text-lg">
                    <RouterLink to="/formulaire" onclick="window.scrollTo(0, 0);" class="hover:opacity-70 focus:opacity-50">Formulaire</RouterLink>
                    <a href="tel:+33632349884" class="hover:opacity-70 focus:opacity-50">+33 6 32 34 98 84</a>
                    <a href="mailto:bardey.lucas1@gmail.com" class="hover:opacity-70 focus:opacity-50">Bardey.lucas1@gmail.com</a>
                    <a href="https://www.google.com/maps/place/55+Rue+Charles+de+Gaulle,+90500+Beaucourt/@47.4819805,6.9196241,15z" class="hover:opacity-70 focus:opacity-50">55 rue Charles de Gaulle 90500 Beaucourt, France</a>
                </nav>
            </div>
            <BackArrow onclick="window.scrollTo({ top: 0, behavior: 'smooth' });" class="mt-10 w-9 h-9 col-start-11 col-span-1 lg:hidden"/>
            <div class="col-span-12 lg:col-start-5 lg:col-span-2 text-center lg:text-left">
                <h3 class="flex items-center justify-center mt-12 mb-6 lg:my-0 lg:h-24 font-michroma text-lg lg:text-2xl">Réseaux</h3>
                <nav class="gap-y-3 flex flex-col lg:text-lg">
                    <a href="https://www.linkedin.com/in/lucas-bardey-8a24ab256/" class="hover:opacity-70 focus:opacity-50"><p>Linkedin</p></a>
                    <a href="https://github.com/BardeyLucas" class="hover:opacity-70 focus:opacity-50"><p>GitHub</p></a>
                    <a href="https://www.instagram.com/denkikned/" class="hover:opacity-70 focus:opacity-50"><p>Instagram</p></a>
                </nav>
            </div>
            <div class="col-span-12 lg:col-start-8 lg:col-span-2 text-center lg:text-left">
                <h3 class="flex items-center justify-center mt-12 mb-6 lg:my-0 lg:h-24 font-michroma text-lg lg:text-2xl hover:opacity-70 focus:opacity-50">Projets</h3>
                <nav class="gap-y-3 flex flex-col lg:text-lg">
                    <RouterLink to="/Projet/hzyx8uz709k7b6w" onclick="window.scrollTo(0, 0);" class="hover:opacity-70 focus:opacity-50"><p>Cardeleon</p></RouterLink>
                    <RouterLink to="/Projet/3any1equfk6yz38" onclick="window.scrollTo(0, 0);" class="hover:opacity-70 focus:opacity-50"><p>Architecture</p></RouterLink>
                    <RouterLink to="/Projet/thxvj0r54z3ynoj" onclick="window.scrollTo(0, 0);" class="hover:opacity-70 focus:opacity-50"><p>Site Esport</p></RouterLink>
                    <RouterLink to="/Projet/6ym7rewppwl81f4" onclick="window.scrollTo(0, 0);" class="hover:opacity-70 focus:opacity-50"><p>Randoala</p></RouterLink>
                </nav>
            </div>
            <BackArrow onclick="window.scrollTo({ top: 0, behavior: 'smooth' });" class="mt-12 col-start-11 col-span-1 hidden lg:block"/>
        </div>
        <div class="flex items-center justify-center gap-3 h-12 lg:h-16 border-t-Rose border-t text-xs lg:text-lg font-michroma">
            <a href="/Portfolio-LucasBardey-Prototype.pdf" download class="hover:opacity-70 focus:opacity-50">Télécharger mon CV</a>
            <div class="h-[2px] w-[10px] mt-1 bg-Blanc"></div>
            <RouterLink to="/Mentions_Legales" class="hover:opacity-70 focus:opacity-50" onclick="window.scrollTo(0, 0);"><p>Mentions légales</p></RouterLink>
        </div>
        <div class="flex items-center justify-center h-12 lg:h-16 border-t-Rose border-t text-xs lg:text-lg font-michroma text-center"><p class="opacity-70">@ 2024 Lucas Bardey all rights reserved</p></div>
    </footer>
    </template>
