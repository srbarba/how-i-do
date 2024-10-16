<template>
  <h1>Orders</h1>

  <orders-filters v-model:searchTerm="searchTerm" />
  <br />
  <orders-list :search-term="searchTerm" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import OrdersFilters from './OrdersFilters.vue'
import OrdersList from './OrdersList.vue'

const searchTerm = ref('')
</script>
