<template>
  <main>
    <hr />
    <small>{{ pageState.title }}</small>
    <h2 class="display-1"> {{ pageState.counter }} </h2>
    <button class="btn btn-success mx-1" @click="modifyCounter(1)">加1个</button>
    <button class="btn btn-danger mx-1" @click="modifyCounter(-1)">减1个</button>
    <hr />
    <div class="d-flex flex-column">
      <input type="text" class="m-1" />
      <input type="text" class="m-1" v-focus />
      <input type="text" class="m-1" />
    </div>
  </main>
</template>

<script setup>
import { reactive, computed, watch, onMounted, onUnmounted, onUpdated } from 'vue';
import { vFocus } from '@/directives/vFocus'

const pageTitle = "Vue3其乐无穷啊！"

const pageState = reactive({
  counter: 100,
  pageTitle: "我的计数器"
})

const odd_even = computed(() => {
  if (pageState.counter % 2 == 0) return "偶数"
  else return "奇数"
})

onMounted(() => {
  console.log("HomeView.onMounted")
})

onUnmounted(() => {
  console.log("HomeView.onUnmounted")
})

onUpdated(() => {
  // !不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环!
  console.log("HomeView.onUpdated", pageState.counter)
})

watch(() => pageState.counter, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  // 当新值大于 110 时，停止更新状态
  if (newValue > 110)
    pageState.counter = oldValue
})

const modifyCounter = (value) => {
  pageState.counter += value
}

// 在模板中启用 v-focus
/**
const vFocus = {
  mounted: (el) => {
    el.focus()
    el.value = "input text"
  }
}
*/
</script>