<template>
  <h1>Orders</h1>

  <orders-filters />
  <br />
  <orders-list />
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import { OrdersSearchTermKey } from './OrdersSearchTermKey'
import OrdersFilters from './OrdersFilters.vue'
import OrdersList from './OrdersList.vue'

const searchTerm = ref('')
provide(OrdersSearchTermKey, searchTerm)
</script>
