<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <article class="grille">
        <h1 class="col-span-12 mt-8 pb-8 lg:pb-12 font-michroma text-xl lg:text-4xl">Formulaire de contact</h1>
        <section class="col-span-12 lg:col-start-2 lg:col-span-6">
            <form class="col12 lg:col6">
                <div class="col-span-6 lg:col-span-3 mb-7">
                    <label class="font-michroma text-base lg:text-xl" for="Prenom">Prenom*</label>
                    <input class="text-sm lg:text-base text-Background w-full mt-1.5 h-11 lg:h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000]" type="text" name="Prenom" id="Prenom" placeholder="Mattieu"/>
                </div>
                <div class="col-span-6 lg:col-span-3 mb-7">
                    <label class="font-michroma text-base lg:text-xl" for="Nom">Nom*</label>
                    <input class="text-sm lg:text-base text-Background w-full mt-1.5 h-11 lg:h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000]" type="text" name="Nom" id="Nom" placeholder="Petit-Jean"/>
                </div>
                <div class="col-span-12 lg:col-span-6 mb-7">
                    <label class="font-michroma text-base lg:text-xl" for="Email">Email*</label>
                    <input class="text-sm lg:text-base text-Background w-full mt-1.5 h-11 lg:h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#FF0000]" type="email" name="Email" id="Email" placeholder="PJ.Mattieu@gmail.com" />
                </div>
                <div class="col-span-12 lg:col-span-6 mb-7">
                    <label class="font-michroma text-base lg:text-xl" for="Objet">Objet*</label>
                    <input class="text-sm lg:text-base text-Background w-full mt-1.5 h-11 lg:h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000]" type="text" name="Objet" id="Objet" placeholder="Avis sur votre portfolio"/>
                </div>
                <div class="col-span-12 lg:col-span-6 mb-7">
                    <label class="font-michroma text-base lg:text-xl" for="Message">Message*</label>
                    <textarea class="text-sm lg:text-base text-Background w-full mt-1.5 rounded-2xl border-Violet border-4 px-4 py-3 focus:border-Rose focus:outline-none invalid:border-[#ce0000]" rows="5" name="Message" id="Message" 
                    placeholder="Bonjour. Je trouve votre portfolio juste magnifique. -Mattieu PJ"></textarea>
                </div>
                <div class="col-span-12 flex justify-around lg:col-span-6 lg:col6 text-Blanc mb-6 font-michroma text-xl">
                    <button class="px-3 lg:px-0 text-center lg:col-span-2 lg:col-start-2 bg-Violet h-10 lg:h-12 rounded-xl  text-sm lg:text-lg"><input type="submit" value="Envoyer le mail" class="cursor-pointer"></button>
                    <button class="px-3 lg:px-0 text-center col-span-2 col-start-4 bg-Violet h-10 lg:h-12 rounded-xl text-sm lg:text-lg"><input type="reset" value="Annuler le mail" class="cursor-pointer"></button>
                </div>
            </form>
            <p class="mb-14">* Champ obligatoire</p>
        </section>
        <div class="hidden lg:block col-span-3 col-start-9 bg-Violet py-10 px-5 h-fit rounded-2xl">
            <h3 class="text-center font-michroma text-xl mb-10">Autres moyens de contacts</h3>
            <p class="mb-1">Numéro de téléphone :</p>
            <p class="mb-5">&nbsp;&nbsp;&nbsp;+33 6 32 34 98 88</p>
            <p class="mb-1">Contact par email :</p>
            <p>&nbsp;&nbsp;&nbsp;Bardey.lucas1@gmail.com</p>
        </div>
    </article>
</template>