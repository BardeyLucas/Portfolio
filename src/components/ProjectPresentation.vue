<template>
    <article class="col-span-12 flex flex-col lg:flex-row  gap-y-5 lg:gap-y-0 lg:gap-x-10 bg-[#FFFFFF20] rounded-2xl px-5 lg:px-10 py-6 !min-width-1" :class="{'lg:flex-row-reverse': Direction == 'reverse'}">
        <section class="lg:min-w-96 lg:max-w-[20vw] h-fit flex flex-col justify-center items-center"> 
            <img v-if="Image == '1'" class="lg:hidden max-h-full h-auto w-full rounded-2xl" src="./ProjetImage/Image-Smash-Arena-Event.png" alt="Smash Arena Event" />  
            <img v-if="Image == '1'" class="hidden lg:block max-h-full h-auto w-full rounded-2xl" src="./ProjetImage/BanderollSmashArenaEvent.png" alt="Smash Arena Event" />  
            <img v-if="Image == '2'" class="lg:hidden max-h-full h-auto w-full rounded-2xl" src="./ProjetImage/Image-Sainte-Suzanne.png" alt="Sainte Suzanne" />  
            <img v-if="Image == '2'" class="hidden lg:block max-h-full h-auto w-full rounded-2xl" src="./ProjetImage/BanderollSainte-Suzanne.png" alt="Sainte Suzanne" />
        </section>
        <section class="gap-y-4 flex flex-col">
            <h2 class="font-michroma text-lg lg:text-2xl">{{Title}}</h2>
            <div class="flex gap-4 font-medium flex-wrap"> 
                <p v-if="Param1" class="bg-Bleu px-3 py-1 rounded-3xl text-[#000]">{{Param1}}</p>
                <p v-if="Param2" class="bg-Bleu px-3 py-1 rounded-3xl text-[#000]">{{Param2}}</p>
                <p v-if="Param3" class="bg-Bleu px-3 py-1 rounded-3xl text-[#000]">{{Param3}}</p>
                <p v-if="Param4" class="bg-Bleu px-3 py-1 rounded-3xl text-[#000]">{{Param4}}</p>
                <p v-if="Param5" class="bg-Bleu px-3 py-1 rounded-3xl text-[#000]">{{Param5}}</p>
            </div>
            <p class="whitespace-pre-line text-sm lg:text-lg">{{Description}}</p>
            <div v-if="LinkDescription1 && LinkUrl1" class="flex flex-col gap-y-2">
                <p>Vous pouvez retrouver mon travail ci-dessous :</p>
                <ul class="list-disc list-inside">
                    <li v-if="LinkDescription1 && LinkUrl1" class="font-medium"><a :href="LinkUrl1"><span class="text-Bleu">{{LinkDescription1}}</span></a></li>
                    <li v-if="LinkDescription2 && LinkUrl2" class="font-medium"><a :href="LinkUrl2"><span class="text-Bleu">{{LinkDescription2}}</span></a></li>
                    <li v-if="LinkDescription3 && LinkUrl3" class="font-medium"><a :href="LinkUrl3"><span class="text-Bleu">{{LinkDescription3}}</span></a></li>
                    <li v-if="LinkDescription4 && LinkUrl4" class="font-medium"><a :href="LinkUrl4"><span class="text-Bleu">{{LinkDescription4}}</span></a></li>
                    <li v-if="LinkDescription5 && LinkUrl5" class="font-medium"><a :href="LinkUrl5"><span class="text-Bleu">{{LinkDescription5}}</span></a></li>
                </ul>
            </div>
            <div class="flex flex-col gap-y-2 font-medium text-sm lg:text-lg">
                <p>Logiciels et outils majoritairement utilisés :</p>
                <div class="flex gap-4 flex-wrap opacity-80"> 
                    <p v-if="Outil1" class="bg-Bleu px-2 py-0.5 rounded-3xl text-[#000]">{{Outil1}}</p>
                    <p v-if="Outil2" class="bg-Bleu px-2 py-0.5 rounded-3xl text-[#000]">{{Outil2}}</p>
                    <p v-if="Outil3" class="bg-Bleu px-2 py-0.5 rounded-3xl text-[#000]">{{Outil3}}</p>
                    <p v-if="Outil4" class="bg-Bleu px-2 py-0.5 rounded-3xl text-[#000]">{{Outil4}}</p>
                    <p v-if="Outil5" class="bg-Bleu px-2 py-0.5 rounded-3xl text-[#000]">{{Outil5}}</p>
                </div>
            </div>
        </section>
    </article>
</template>
<script setup lang="ts">
const props = defineProps<{
    Image: string
    Title: string
    Description: string
    Direction?: string
    Param1?: string
    Param2?: string
    Param3?: string
    Param4?: string
    Param5?: string
    Outil1?: string
    Outil2?: string
    Outil3?: string
    Outil4?: string
    Outil5?: string
    LinkDescription1?: string
    LinkUrl1?: string,
    LinkDescription2?: string
    LinkUrl2?: string
    LinkDescription3?: string
    LinkUrl3?: string
    LinkDescription4?: string
    LinkUrl4?: string
    LinkDescription5?: string
    LinkUrl5?: string
}>()
</script>