<script setup lang="ts">
import { ref } from 'vue'
const counter = ref(0)
</script>

<template>
  <div>
    <h1>{{ counter }}</h1>
    <button @click="counter++">increment</button>

    <button @click="counter--">decrement</button>
  </div>
</template>