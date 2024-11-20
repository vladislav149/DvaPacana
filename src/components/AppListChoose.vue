<script setup lang="ts">
import AppList from '@/components/AppList.vue'
import AppArticle from '@/components/AppArticle.vue'
import type {Product} from '@/types'
import {ref} from 'vue'

const props = defineProps<{
  items: Product[]
  maxChoose: number
}>()

const emit = defineEmits<{
  select: [Product[]]
}>()

const chosenItem = ref<Product[]>([])

function onChoose(item: Product) {
  const foundId = chosenItem.value.indexOf(item)

  if (foundId !== -1) {
    chosenItem.value.splice(foundId, 1)
  } else {
    chosenItem.value.push(item)
    if (chosenItem.value.length > props.maxChoose) chosenItem.value.splice(0, 1)
  }

  emit('select', chosenItem.value)
}

function checkChosen(item: Product) {
  return chosenItem.value.includes(item)
}
</script>

<template>
  <AppList :items>
    <template #default="{item}">
      <AppArticle
        :chosen="checkChosen(item)"
        @click="onChoose(item)"
      >
        {{ item.name }}
      </AppArticle>
    </template>
  </AppList>
</template>
