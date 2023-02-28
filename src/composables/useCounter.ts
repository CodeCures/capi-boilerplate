import { ref, computed } from 'vue'

export function useCounter() {
    const count = ref(0)
    const counter = computed(() => `Current count (${count.value}) + 1 = ${count.value + 1}`)

    const increment = () => count.value++

    const decrement = () => {
        if (count.value == 0) return;
        count.value--
    }

    return {
        counter,
        increment,
        decrement
    }
}