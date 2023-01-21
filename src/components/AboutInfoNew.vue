<template>
    <div class="p-3 bg-light border shadow-sm">
        <h1 class="text-info">新UI</h1>
        <h2 v-if="title">{{ title }}</h2>
        <h2 v-else>新画面新内容</h2>
        <button @click="btnClose" class="btn btn-warning text-light">关闭</button>
    </div>
</template>
  
<script setup>
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