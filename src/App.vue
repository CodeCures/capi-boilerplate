<script setup lang="ts">
import { ref, computed } from 'vue'
const count = ref(0)
const counter = computed(() => `Current count (${count.value}) + 1 = ${count.value + 1}`)
</script>

<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="count++">increment</button>

    <button @click="count--">decrement</button>
  </div>
</template>