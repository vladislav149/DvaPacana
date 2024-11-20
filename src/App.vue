<script setup lang="ts">
import AppListChoose from '@/components/AppListChoose.vue'
import AppListHeader from '@/components/AppListHeader.vue'
import {onMounted, ref} from 'vue'
import type {Product} from '@/types'
import productsApi from '@/api/products'

const myProducts = ref<Product[] | null>(null)
const products = ref<Product[] | null>(null)
onMounted(async () => {
  ;[myProducts.value, products.value] = await Promise.all([
    productsApi.getMyProducts(),
    productsApi.getProducts(),
  ])
})

const chosenMyProducts = ref<Product[] | null>(null)
function onSelectMyProducts(items: Product[]) {
  chosenMyProducts.value = items
}

const chosenProducts = ref<Product[] | null>(null)
function onSelectProducts(items: Product[]) {
  chosenProducts.value = items
}
</script>

<template>
  <div class="wrapper container">
    <div class="inner">
      <div v-if="!chosenMyProducts || !chosenMyProducts.length">Нет данных</div>
      <AppListHeader
        v-else
        :items="chosenMyProducts"
      />
      <div v-if="!chosenProducts || !chosenProducts.length">Нет данных</div>

      <AppListHeader
        v-else
        :items="chosenProducts"
      />
    </div>
    <div class="inner">
      <div v-if="!myProducts">Загрузка...</div>
      <AppListChoose
        v-else
        :max-choose="6"
        :items="myProducts"
        @select="onSelectMyProducts"
      />

      <div v-if="!products">Загрузка...</div>
      <AppListChoose
        v-else
        :max-choose="1"
        :items="products"
        @select="onSelectProducts"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.inner {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  &:first-child {
    margin-bottom: auto;
  }
}
</style>
