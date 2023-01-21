import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // 定义状态
  const count = ref(0);

  // 计算属性
  const odd_even = computed(() => {
    if (count.value % 2 == 0) return "偶数";
    else return "奇数";
  });
  
  // 操作方法
  const modifyCounter = (value) => {
    count.value += value;
  };
  // 返回内容
  return { count, odd_even, modifyCounter };
});