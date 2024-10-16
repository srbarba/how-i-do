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
import { ref, onMounted, watch, inject } from 'vue'
import { OrdersSearchTermKey } from './OrdersSearchTermKey'

type Order = {
  id: number
  name: string
  customerName: string
}

const searchTerm = inject(OrdersSearchTermKey)
const loading = ref(true)
const error = ref<Error | undefined>(undefined)
const data = ref<{ orders: Order[] } | undefined>(undefined)

watch(
  () => searchTerm?.value,
  () => getData()
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
              if (!searchTerm?.value) {
                return true
              }
              return o.customerName.includes(searchTerm.value)
            }),
          })
        }
      }, 1000)
    })
  } catch (e) {
    error.value = e as Error
  } finally {
    loading.value = false
  }
}

onMounted(getData)
</script>
