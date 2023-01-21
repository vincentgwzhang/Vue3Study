<template>
  <div class="p-3 bg-light border shadow-sm">
    <h2>新画面新内容</h2>
    <h2 v-if="title">{{ title }}</h2>
    <button @click="btnClose" class="btn btn-warning text-light">关闭</button>
  </div>
</template>

<script setup>
/** This is to define input from parent component  */
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["hideMe234"]);// 这个意思是说，定义一个 emit 可以接受的事件名称

const btnClose = () => {
  emit("hideMe234");
};
</script>