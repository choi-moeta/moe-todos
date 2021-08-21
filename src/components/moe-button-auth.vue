<script setup lang="ts">
import type { PropType } from 'vue'
import { logInWith, Provider } from '$/api'

const props = defineProps({
  provider: {
    type: String as PropType<Provider>,
    required: true,
  },
})

function onLogIn() {
  logInWith(props.provider)
}
</script>

<template>
  <button
    class="
      flex gap-2 items-center
      px-4 py-2
      rounded
      border border-gray-300 dark:border-gray-700
      hover:(bg-gray-100 dark:bg-gray-800)
      focus-visible:(bg-gray-100)
      focus:(outline-none)
    "
    @click="onLogIn"
  >
    <template v-if="provider == 'discord'">
      <fa-brands:discord />
      <div class="mx-auto">
        дискорд
      </div>
    </template>
    <template v-else-if="provider == 'github'">
      <fa-brands:github />
      <div class="mx-auto">
        гитхаб
      </div>
    </template>
    <template v-else>
      <div class="mx-auto">
        {{ provider }}
      </div>
    </template>
  </button>
</template>
