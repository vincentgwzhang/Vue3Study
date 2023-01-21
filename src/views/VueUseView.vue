<template>
  <main>
    <h1>VueUse 使用例</h1>
    <hr />
    <h2>鼠标X: {{ x }}</h2>
    <h2>鼠标Y: {{ y }}</h2>
  </main>
</template>

<script setup>
import { useMouse } from "@vueuse/core";
const { x, y } = useMouse();
</script>
