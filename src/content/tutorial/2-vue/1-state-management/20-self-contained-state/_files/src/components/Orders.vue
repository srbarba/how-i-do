<template>
  <h1>Orders</h1>
  <div>
    <button @click="getData(false)" :loading="loading">Refresh orders</button>
    <button @click="getData(true)" :loading="loading">Force error</button>
  </div>
  <template v-if="loading">Loading...</template>
  <template v-else-if="error">Error: {{ error.message }}</template>
  <template v-else-if="data">
    <ul>
      <li v-for="order in data.orders" :key="order.id">
        Order: {{ order.name }}
      </li>
    </ul>
  </template>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const error = ref(undefined)
const data = ref(undefined)

const getData = async (forceError = false) => {
  try {
    loading.value = true
    error.value = undefined
    data.value = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (forceError) {
          reject(new Error('Failed to fetch'))
        } else {
          resolve({
            orders: Array.from({ length: 5 }, (_, i) => ({
              id: i,
              name: `Order ${i}`,
            })),
          })
        }
      }, 1000)
    })
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

onMounted(getData)
</script>
