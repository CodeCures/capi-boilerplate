<script setup lang="ts">
import { ref, computed } from 'vue'
const count = ref(0)
const counter = computed(() => `Current count (${count.value}) + 1 = ${count.value + 1}`)

const increment = () => count.value++

const decrement = () => {
  if (count.value == 0) return;
  count.value--
}
</script>

<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="increment">increment</button>

    <button @click="decrement">decrement</button>
  </div>
</template>