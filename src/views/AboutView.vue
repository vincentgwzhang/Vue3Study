<template>
  <div class="about">
    <h1>关于页面</h1>
    <hr />
    <div><input type="checkbox" v-model="isNew" /> 新版本</div>
    <button @click="setOpen(true)" class="btn btn-info text-light">打开</button>
    <AboutInfo v-if="showOpen" title="Vue3真简单" @hideMe234="setOpen(false)" />


    <!--动态切换-->
    <component v-if="showOpen" :is="isNew ? AboutInfoNew : AboutInfo" title="Vue3真简单" @hideMe="setOpen(false)"></component>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AboutInfo from "@/components/AboutInfo.vue";
import AboutInfoNew from "@/components/AboutInfoNew.vue";

const showOpen = ref(false);
const titleForChile = ref("");
const isNew = ref(true);

const times = ref(0);

const setOpen = (isShow) => {
  showOpen.value = isShow;

  if (isShow == true) {
    times.value = times.value + 1;
    titleForChile.value = `this is ${times.value} times open`;
    console.log(titleForChile.value);
  }
};
</script>