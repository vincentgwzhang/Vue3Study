<template>
  <main>
    <hr />
    <small>{{ pageState.title }}</small>
    <h2 class="display-1"> {{ pageState.counter }} </h2>
    <h2 class="display-1" ref="lblCounter">{{ counterData.count }}</h2>
    <button class="btn btn-success mx-1" @click="modifyCounter(1)">加1个</button>
    <button class="btn btn-danger mx-1" @click="modifyCounter(-1)">减1个</button>
    <p>{{ odd_even }}</p>
    <hr />
    <div class="d-flex flex-column">
      <input type="text" class="m-1" />
      <input type="text" class="m-1" v-focus />
      <input type="text" class="m-1" />
    </div>


    <!--class 23 begin-->
    <hr />
    <input type="text" v-model="pageTitle" ref="inputTitle" />
    <button class="btn btn-primary ms-1" @click="btnOnClick">设定</button>
    <!--class 23 end-->
  </main>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted, onUpdated, nextTick } from 'vue';
import { vFocus } from '@/directives/vFocus'
import { useCounter } from "@/use/useCounter";
const { counterData, odd_even } = useCounter();

const counter = ref(100);
const pageTitle = ref("value for page title");
const inputTitle = ref(null);
const lblCounter = ref(null);

const btnOnClick = () => {
  // inputTitle: 引用声明
  // inputTitle.value: 引用的对象
  // inputTitle.value.value: 引用的对象的 value 属性
  console.log(inputTitle.value.value);
};


const pageState = reactive({
  counter: 100,
  pageTitle: "我的计数器"
})

onMounted(() => {
  console.log("HomeView.onMounted")
})

onUnmounted(() => {
  console.log("HomeView.onUnmounted")
})

onUpdated(() => {
  // !不要在 updated 钩子中更改组件的状态，这可能会导致无限的更新循环!
  console.log("HomeView.onUpdated 1", pageState.counter)
  console.log("HomeView.onUpdated 2", lblCounter.value.innerText) // this would always get new value
})

watch(() => pageState.counter, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  // 当新值大于 110 时，停止更新状态
  if (newValue > 110)
    pageState.counter = oldValue
})

const modifyCounter = (value) => {
  pageState.counter += value
  counter.value += value;
  counterData.count +=value;


  // class 24, for async update knowledge
  console.log("lblCounter [before improve]:", lblCounter.value.innerText);// this would be old value
  // how to improve?
  nextTick(() => {
    console.log("lblCounter [after improve]:", lblCounter.value.innerText);// this would be new value
  });
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