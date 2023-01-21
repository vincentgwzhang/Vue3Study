import { reactive, computed, onMounted } from "vue";

const counterData = reactive({
    count: 100,
});

export function useCounter() {
    onMounted(() => {
        console.log("useCounter.onMounted");
    });
    const modifyCounter = (value) => {
        counterData.count += value;
    };
    // 定义奇偶属性
    const odd_even = computed(() => {
        if (counterData.count % 2 == 0) return "偶数";
        else return "奇数";
    });

    return {
        counterData,
        modifyCounter,
        odd_even,
    };
}