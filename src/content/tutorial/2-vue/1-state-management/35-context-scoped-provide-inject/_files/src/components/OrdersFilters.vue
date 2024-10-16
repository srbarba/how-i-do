<template>
  <div>
    <div>
      <label for="searchTerm">Search Order</label>
    </div>
    <input v-model="searchTerm" id="searchTerm" type="text" />
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { OrdersSearchTermKey } from './OrdersSearchTermKey'

const searchTerm = inject(OrdersSearchTermKey)
</script>
