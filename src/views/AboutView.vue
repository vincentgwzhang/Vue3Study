<template>
  <div class="about">
    <h1>关于页面</h1>
    <hr />
    <button @click="setOpen(true)" class="btn btn-info text-light">打开</button>
    <div v-if="showOpen" class="p-3 bg-light border shadow-sm">
      <h2>新画面新内容</h2>
      <button @click="setOpen(false)" class="btn btn-warning text-light">
        关闭
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showOpen = ref(false);

const setOpen = (isShow) => {
  showOpen.value = isShow;
};
</script>