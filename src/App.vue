<script setup lang="ts">
import { useCounter } from './composables/useCounter'
const { counter, increment, decrement } = useCounter()
</script>

<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="increment">increment</button>

    <button @click="decrement">decrement</button>
  </div>
</template>