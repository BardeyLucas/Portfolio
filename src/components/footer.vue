<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer class="bg-Background border-t-Rose border-t text-Blanc">
        <div class="grille pb-5">
            <div class="col-span-12 lg:col-start-2 lg:col-span-2 text-center lg:text-left">
                <h3 class="flex items-center justify-center mt-12 mb-6 lg:my-0 lg:h-24 font-michroma text-lg lg:text-2xl">Contacts</h3>
                <nav class="gap-y-3 flex flex-col lg:text-lg">
                    <RouterLink to="/formulaire">Formulaire</RouterLink>
                    <a href="tel:+33632349884">+33 6 32 34 98 84</a>
                    <a href="mailto:bardey.lucas1@gmail.com">Bardey.lucas1@gmail.com</a>
                    <a href="https://www.google.com/maps/place/55+Rue+Charles+de+Gaulle,+90500+Beaucourt/@47.4819805,6.9196241,15z" class="px-10 lg:px-0">55 rue Charles de Gaulle 90500 Beaucourt, France</a>
                </nav>
            </div>
            <div class="col-span-12 lg:col-start-5 lg:col-span-2 text-center lg:text-left">
                <h3 class="flex items-center justify-center mt-12 mb-6 lg:my-0 lg:h-24 font-michroma text-lg lg:text-2xl">Réseaux</h3>
                <nav class="gap-y-3 flex flex-col lg:text-lg">
                    <a href="https://www.linkedin.com/in/lucas-bardey-8a24ab256/"><p>Linkedin</p></a>
                    <a href="https://github.com/BardeyLucas"><p>GitHub</p></a>
                    <a href="https://www.instagram.com/denkikned/"><p>Instagram</p></a>
                </nav>
            </div>
            <div class="col-span-12 lg:col-start-8 lg:col-span-2 text-center lg:text-left">
                <h3 class="flex items-center justify-center mt-12 mb-6 lg:my-0 lg:h-24 font-michroma text-lg lg:text-2xl">Projets</h3>
                <nav class="gap-y-3 flex flex-col lg:text-lg">
                    <RouterLink to="/Projet/hzyx8uz709k7b6w"><p>Cardeleon</p></RouterLink>
                    <RouterLink to="/Projet/3any1equfk6yz38"><p>Architecture</p></RouterLink>
                    <RouterLink to="/Projet/thxvj0r54z3ynoj"><p>Site Esport</p></RouterLink>
                    <RouterLink to="/Projet/6ym7rewppwl81f4"><p>Randoala</p></RouterLink>
                </nav>
            </div>
        </div>
        <div class="flex items-center justify-center h-12 lg:h-16 border-t-Rose border-t text-xs lg:text-lg font-michroma"><RouterLink to="/Mentions_Legales"><p>Mentions légales</p></RouterLink></div>
        <div class="flex items-center justify-center h-12 lg:h-16 border-t-Rose border-t text-xs lg:text-lg font-michroma text-center"><p>@ 2024 Lucas Bardey all rights reserved</p></div>
    </footer>
    </template>
