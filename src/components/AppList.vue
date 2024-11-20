<script setup lang="ts">
import type {Product} from '@/types'

defineProps<{
  items: Product[]
}>()
</script>

<template>
  <ul class="list">
    <li
      v-for="item in items"
      :key="item.id"
    >
      <slot :item />
    </li>
  </ul>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  border: 3px solid black;
  padding: 10px;
}
</style>
