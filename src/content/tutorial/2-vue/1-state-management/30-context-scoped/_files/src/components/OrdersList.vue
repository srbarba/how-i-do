<template>
  <div>
    <button @click="getData(false)" :loading="loading">Refresh orders</button>
    <button @click="getData(true)" :loading="loading">Force error</button>
  </div>

  <template v-if="loading">Loading...</template>
  <template v-else-if="error">Error: {{ error.message }}</template>
  <template v-else-if="data">
    <ul>
      <li v-for="order in data.orders" :key="order.id">
        <div>Order: {{ order.name }}</div>
        <div>Customer: {{ order.customerName }}</div>
      </li>
    </ul>
  </template>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{ searchTerm: string }>()

const loading = ref(true)
const error = ref(undefined)
const data = ref(undefined)

watch(
  () => props.searchTerm,
  () => {
    return getData()
  }
)

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
              customerName: `Customer ${i}`,
            })).filter((o) => {
              if (!props.searchTerm) {
                return true
              }
              return o.customerName.includes(props.searchTerm)
            }),
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
