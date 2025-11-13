<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

function reset() {
  count.value = 0
}

function increment() {
  count.value += 1
}

const decrement = () => {
  count.value -= 1
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">+</button>
    <button type="button" @click="decrement">-</button>
    <h1>{{ count }}</h1>
    <button type="button" @click="reset">reset</button>
    
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>

button {
  color: red;
}
.read-the-docs {
  color: #747474;
}
</style>
