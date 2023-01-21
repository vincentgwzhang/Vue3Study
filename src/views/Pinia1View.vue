<template>
  <main>
    <h1>Pinia 1</h1>
    <hr />
    <small>和 Pinia2 共享全局数据</small>
    <h2>{{ counter.count }}</h2>
    <button class="btn btn-success mx-1" @click="counter.modifyCounter(1)">加1个</button>
    <button class="btn btn-danger mx-1" @click="counter.modifyCounter(-1)">减1个</button>
  </main>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();
</script>