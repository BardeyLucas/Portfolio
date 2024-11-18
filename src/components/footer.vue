<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer class="bg-Background border-t-Rose border-t text-Blanc">
        <div class="grille pb-5">
            <div class="col-span-12 lg:col-start-2 lg:col-span-2 text-center lg:text-left">
                <h3 class="flex items-center justify-center h-24 font-michroma text-2xl">Contacts</h3>
                <nav class="gap-y-3 flex flex-col text-lg">
                    <RouterLink to="/formulaire">Formulaire</RouterLink>
                    <p>+33 6 32 34 98 88</p>
                    <p>Bardey.lucas1@gmail.com</p>
                    <p>55 rue charles de gaulle 90500 Beaucourt, France</p>
                </nav>
            </div>
            <div class="col-span-12 lg:col-start-5 lg:col-span-2 text-center lg:text-left">
                <h3 class="flex items-center justify-center h-24 font-michroma text-2xl">Réseaux</h3>
                <nav class="gap-y-3 flex flex-col text-lg">
                    <a href="#"><p>Linkedin</p></a>
                    <a href="#"><p>GitHub</p></a>
                    <a href="#"><p>Instagram</p></a>
                </nav>
            </div>
            <div class="col-span-12 lg:col-start-8 lg:col-span-2 text-center lg:text-left">
                <h3 class="flex items-center justify-center h-24 font-michroma text-2xl">Projets</h3>
                <nav class="gap-y-3 flex flex-col text-lg">
                    <RouterLink to="#"><p>Cardeleon</p></RouterLink>
                    <RouterLink to="#"><p>Architecture</p></RouterLink>
                    <RouterLink to="#"><p>Logo</p></RouterLink>
                    <RouterLink to="#"><p>Randoala</p></RouterLink>
                </nav>
            </div>
        </div>
        <div class="flex items-center justify-center h-16 border-t-Rose border-t text-lg font-michroma"><RouterLink to="/Mentions_Legales"><p>Mentions légales</p></RouterLink></div>
        <div class="flex items-center justify-center h-16 border-t-Rose border-t text-lg font-michroma"><p>@ 2024 Lucas Bardey all rights reserved</p></div>
    </footer>
    </template>
