<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h1 class="ml-16">Formulaire de contact</h1>
    <article class="grille">
        <section class="col-start-2 col-span-6">
            <form class="col6">
                <div class="col-span-3">
                    <label for="Prenom">Prenom*:</label>
                    <input class="w-full" type="text" name="Prenom" id="Prenom" placeholder="Mattieu" required/>
                </div>
                <div class="col-span-3">
                    <label for="Nom">Nom*:</label>
                    <input class="w-full" type="text" name="Nom" id="Nom" placeholder="Petit-Jean" required/>
                </div>
                <div class="col-span-6">
                    <label for="Email">Email*:</label>
                    <input class="w-full" type="email" name="Email" id="Email" placeholder="PJ.Mattieu@gmail.com" required/>
                </div>
                <div class="col-span-6">
                    <label for="Objet">Objet*:</label>
                    <input class="w-full" type="text" name="Objet" id="Objet" placeholder="Avis sur votre portfolio" required/>
                </div>
                <div class="col-span-6">
                    <label for="Message">Message*:</label>
                    <textarea class="w-full" rows="5" name="Message" id="Message" 
                    placeholder="Bonjour.
Je trouve votre portfolio juste magnifique.
-Mattieu PJ" required></textarea>
                </div>
                <button class="col-span-2 col-start-2"><input type="submit" value="Envoyer le mail"></button>
                <button class="col-span-2 col-start-4"><input type="reset" value="Annuler le mail"></button>
            </form>
            <p>* Champ obligatoire</p>
        </section>
        <section class="col-span-3 col-start-8 px-20">
            <h3>Autres moyens de contacts</h3>
            <p>Numéro de téléphone :</p>
            <p>+33 6 32 34 98 88</p>
            <p>Contact par email :</p>
            <p>Bardey.lucas1@gmail.com</p>
        </section>
    </article>
</template>