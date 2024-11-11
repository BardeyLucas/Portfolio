<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <article class="grille">
        <h1 class="col-span-12 pb-12 font-michroma text-6xl">Formulaire de contact</h1>
        <section class="col-span-12 lg:col-start-2 lg:col-span-6">
            <form class="col12 lg:col6">
                <div class="col-span-6 lg:col-span-3 mb-7">
                    <label class="font-michroma text-2xl" for="Prenom">Prenom*:</label>
                    <input class="text-Background w-full mt-2 h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000]" type="text" name="Prenom" id="Prenom" placeholder="Mattieu" required/>
                </div>
                <div class="col-span-6 lg:col-span-3 mb-7">
                    <label class="font-michroma text-2xl" for="Nom">Nom*:</label>
                    <input class="text-Background w-full mt-2 h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000]" type="text" name="Nom" id="Nom" placeholder="Petit-Jean" required/>
                </div>
                <div class="col-span-12 lg:col-span-6 mb-7">
                    <label class="font-michroma text-2xl peer..." for="Email">Email*:</label>
                    <input class="text-Background w-full mt-2 h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000]" type="email" name="Email" id="Email" placeholder="PJ.Mattieu@gmail.com" required/>
                </div>
                <div class="col-span-12 lg:col-span-6 mb-7">
                    <label class="font-michroma text-2xl" for="Objet">Objet*:</label>
                    <input class="text-Background w-full mt-2 h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000]" type="text" name="Objet" id="Objet" placeholder="Avis sur votre portfolio" required/>
                </div>
                <div class="col-span-12 lg:col-span-6 mb-7">
                    <label class="font-michroma text-2xl" for="Message">Message*:</label>
                    <textarea class="text-Background w-full mt-2 rounded-2xl border-Violet border-4 px-4 py-3 focus:border-Rose focus:outline-none invalid:border-[#ce0000]" rows="5" name="Message" id="Message" 
                    placeholder="Bonjour. Je trouve votre portfolio juste magnifique. -Mattieu PJ" required></textarea>
                </div>
                <div class="col-span-12 flex justify-around lg:col-span-6 lg:col6">
                    <button class="px-5 lg:px-0 text-center lg:col-span-2 lg:col-start-2"><input type="submit" value="Envoyer le mail"></button>
                    <button class="px-5 lg:px-0 text-center col-span-2 col-start-4"><input type="reset" value="Annuler le mail"></button>
                </div>
            </form>
            <p>* Champ obligatoire</p>
        </section>
        <section class="hidden lg:block col-span-3 col-start-8 px-20">
            <h3>Autres moyens de contacts</h3>
            <p>Numéro de téléphone :</p>
            <p>+33 6 32 34 98 88</p>
            <p>Contact par email :</p>
            <p>Bardey.lucas1@gmail.com</p>
        </section>
    </article>
</template>