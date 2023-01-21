<template>
    <div class="p-3 bg-light border shadow-sm">
        <h1 class="text-info">新UI</h1>
        <div class="text-danger fw-bold">
          {{ globalData.name }} / {{ globalData.uid }}
        </div>
        <h2 v-if="title">{{ title }}</h2>
        <h2 v-else>新画面新内容</h2>
        <button @click="btnClose" class="btn btn-warning text-light">关闭</button>
    </div>
</template>
  
<script setup>
  import { inject } from "vue";
  const globalData = inject("globalData");

  const props = defineProps({
    title: {
      type: String,
      default: "",
    },
  });
  
  const emit = defineEmits(["hideMe"]);
  
  const btnClose = () => {
    emit("hideMe");
  };
</script>