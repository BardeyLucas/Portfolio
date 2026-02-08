<script setup lang="ts">
    const props = defineProps<{
    Text: string
    }>()
</script>
<template>
    <button
  class="inline-flex justify-center items-center relative gap-2.5 px-[30px] py-[15px] rounded-[10px] bg-[#00176a] border-2 border-[#adbfff]"
>
  <p class="flex-grow-0 flex-shrink-0 text-2xl text-center text-white">{{ props.Text }}</p>
</button>
</template>