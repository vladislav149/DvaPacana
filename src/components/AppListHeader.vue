<script setup lang="ts">
import AppList from '@/components/AppList.vue'
import AppArticle from '@/components/AppArticle.vue'
import type {Product} from '@/types'

defineProps<{
  items: Product[]
}>()
</script>

<template>
  <AppList :items>
    <template #default="{item}">
      <AppArticle>
        {{ item.name }}
      </AppArticle>
    </template>
  </AppList>
</template>
