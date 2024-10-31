<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer>
        <div class="grille">
            <div class="col-span-12 lg:col-start-2 lg:col-span-2 text-center lg:text-left">
                <h3 class="text-center">Contacts</h3>
                <nav>
                    <p>Formulaire</p>
                    <p>+33 6 32 34 98 88</p>
                    <p>Bardey.lucas1@gmail.com</p>
                    <p>55 rue charles de gaulle 90500 Beaucourt, France</p>
                </nav>
            </div>
            <div class="col-span-12 lg:col-start-5 lg:col-span-2 text-center lg:text-left">
                <h3 class="text-center">Réseaux</h3>
                <nav>
                    <a href="#"><p>- Linkedin</p></a>
                    <a href="#"><p>- Instagram</p></a>
                </nav>
            </div>
            <div class="col-span-12 lg:col-start-8 lg:col-span-2 text-center lg:text-left">
                <h3 class="text-center">Projets</h3>
                <nav>
                    <RouterLink to="#"><p>- Cardeleon</p></RouterLink>
                    <RouterLink to="#"><p>- Architecture</p></RouterLink>
                    <RouterLink to="#"><p>- Logo</p></RouterLink>
                    <RouterLink to="#"><p>- Randoala</p></RouterLink>
                </nav>
            </div>
        </div>
        <div class="text-center"><p>Mentions légales</p></div>
        <div class="text-center"><p>@ 2024 Lucas Bardey all rights reserved</p></div>
    </footer>
    </template>
