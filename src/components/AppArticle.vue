<script setup lang="ts">
import {computed} from 'vue'

const {chosen = false} = defineProps<{
  chosen?: boolean
}>()

const colorCSS = computed(() => (chosen ? 'blue' : 'black'))
</script>

<template>
  <article class="article">
    <h1>
      <slot />
    </h1>
  </article>
</template>

<style scoped>
.article {
  border: 1px solid black;
  min-height: 100px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: v-bind(colorCSS);

  &:hover {
    background-color: blanchedalmond;
  }
}
</style>
