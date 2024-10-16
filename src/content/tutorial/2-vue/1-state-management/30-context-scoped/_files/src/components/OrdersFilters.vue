<template>
  <div>
    <div>
      <label for="searchTerm">Search Order</label>
    </div>
    <input v-model="searchTerm" id="searchTerm" type="text" />
  </div>
</template>

<script lang="ts" setup>
const searchTerm = defineModel('searchTerm')
</script>
