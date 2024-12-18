<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <section class="col-span-12 lg:col-start-2 lg:col-span-6">
        <form @submit.prevent="submitForm" class="col-span-6 lg:col-span-3 mb-7">
          <div class="col-span-6 lg:col-span-3 mb-7">
            <label class="font-michroma text-base lg:text-xl" for="firstName">Prenom*</label>
            <input class="text-sm lg:text-base text-Background w-full mt-1.5 h-11 lg:h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000] transition-colors duration-500" type="text" name="firstName" v-model="form.firstName" placeholder="Mattieu"/>
          </div>
          <div class="col-span-6 lg:col-span-3 mb-7">
            <label class="font-michroma text-base lg:text-xl" for="lastName">Nom*</label>
            <input class="text-sm lg:text-base text-Background w-full mt-1.5 h-11 lg:h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000] transition-colors duration-500" type="text" name="lastName" v-model="form.lastName" placeholder="Petit-Jean"/>
          </div>
          <div class="col-span-6 lg:col-span-3 mb-7">
            <label class="font-michroma text-base lg:text-xl" for="email">Email*</label>
            <input class="text-sm lg:text-base text-Background w-full mt-1.5 h-11 lg:h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000] transition-colors duration-500" type="email" name="email" v-model="form.email" placeholder="PJ.Mattieu@gmail.com"/>
          </div>
          <div class="col-span-6 lg:col-span-3 mb-7">
            <label class="font-michroma text-base lg:text-xl" for="object">Objet*</label>
            <input class="text-sm lg:text-base text-Background w-full mt-1.5 h-11 lg:h-14 rounded-2xl border-Violet border-4 px-4 focus:border-Rose focus:outline-none invalid:border-[#ce0000] transition-colors duration-500" type="text" name="object" v-model="form.object" placeholder="Avis sur votre portfolio"/>
          </div>
          <div class="col-span-12 lg:col-span-6 mb-7">
            <label class="font-michroma text-base lg:text-xl" for="message">Message*</label>
            <textarea class="text-sm lg:text-base text-Background w-full mt-1.5 rounded-2xl border-Violet border-4 px-4 py-3 focus:border-Rose focus:outline-none invalid:border-[#ce0000] transition-colors duration-500" rows="5" name="message" v-model="form.message" 
            placeholder="Bonjour. Je trouve votre portfolio juste magnifique. -Mattieu PJ"></textarea>
          </div>
          <div class="col-span-12 justify-around lg:col-span-6 col12 lg:col6 text-Blanc mb-6 font-michroma text-xl">
            <button class="px-5 text-center col-span-6 lg:col-span-1 lg:col-end-4 bg-Violet hover:bg-[#9d2e89] transition-colors duration-100 h-10 lg:h-12 rounded-xl text-sm lg:text-lg"><input type="submit" value="Envoyer le mail" class="cursor-pointer"></button>
            <button class="px-5 text-center col-span-6 lg:col-span-1 lg:col-start-4 bg-Violet hover:bg-[#9d2e89] transition-colors duration-100 h-10 lg:h-12 rounded-xl text-sm lg:text-lg"><input type="reset" value="Annuler le mail" class="cursor-pointer"></button>
          </div>
        </form>
        <p class="mb-14">* Champ obligatoire</p>
    </section>
  </template>

<script setup lang="ts">
import { ref } from 'vue';

const WEB3FORMS_ACCESS_KEY = "3744730f-e212-4a67-9e52-ed816a4ea7a3";

interface FormData {
  firstName: string
  lastName: string
  email: string
  object: string
  message: string
}

const form = ref<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  object: '',
  message: ''
})

const submitForm = async () => {
  try {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...form.value
    }),
  });
  const result = await response.json()
  if (result.success) {
      console.log('Form submitted successfully:', result)
      // Reset the form if needed
      form.value = { firstName: '', lastName: '', email: '', object: '',  message: '' }
    } else {
      console.error('Form submission failed:', result)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
};
</script>
