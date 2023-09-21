<script lang="ts" setup>
import { formatError } from '@/utils'

// defineProps means that the component expects a prop called errors
// Record<string, string[]> means that the errors prop is an object with string keys and string[] values
const props = defineProps<{ errors: Record<string, string[]> }>()
const isErrors = computed(() => Object.keys(props.errors).length > 0)
</script>

<template>
  <ul v-if="isErrors" class="error-messages">
    <li v-for="error in formatError(errors)" :key="error">
      {{ error }}
    </li>
  </ul>
</template>
