<!-- <script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from './ImgPb.vue'
const props = defineProps<ProjetsResponse<any>>()
console.log('test')
</script>
<template>
  <div
  class="w-[290px] h-[242px] relative"
  style="filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));"
>
  <div class="w-[290px] h-[188.75px] absolute left-[-1px] top-[-1px] bg-[#00092a]"></div>
  <ImgPb
      :record="props"
      :filename="miniature"
      class="w-[270px] h-[168.75px] absolute left-[9px] top-[9px] object-cover"
    />
  <div class="w-2.5 h-5 absolute left-[114px] top-[187px] bg-[#00092a]"></div>
  <div class="w-2.5 h-5 absolute left-[167px] top-[187px] bg-[#00092a]"></div>
  <div
    class="flex flex-col justify-center items-center w-[290px] absolute left-0 top-[204px] gap-2.5"
  >
    <div
      class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3 py-2 bg-[#00092a]"
    >
      <p class="flex-grow-0 flex-shrink-0 text-xl text-center text-[#ffa800]">{{ props.titleAlt }}</p>
    </div>
  </div>
</div>
</template> -->
<!-- 
<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from './ImgPb.vue'
const projet = defineProps<ProjetsResponse<any>>()
import { RouterLink } from 'vue-router/auto';
import TriangleDecoration from './HomeIMG/TriangleDecoration.vue';
</script>
<template>
  <div class="CardProjet bg-Rose w-full border-l-8 border-Violet">
    <div class="CardCorrectif"></div>
    <div class="CardProjetEffect h-[400px] bg-Bleu border-Violet border-8">
    </div>
  </div>
</template> -->