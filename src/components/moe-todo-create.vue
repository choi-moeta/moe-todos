<script setup lang="ts">
const emit = defineEmits<{
  (event: 'create', text: string): void
}>()

const textEl = ref<HTMLDivElement | null>()

function onCreate() {
  const text = textEl.value?.innerText
  if (text && textEl.value) {
    textEl.value.innerText = ''
    emit('create', text)
  }
}
</script>

<template>
  <div>
    <div
      ref="textEl"
      contenteditable
      class="
        border border-gray-300
        px-4 py-2
        rounded
      "
      placeholder="create todo"
      type="text"
      name=""
    >
    </div>
    <div class="flex gap-2 mt-4">
      <moe-button @click="onCreate">
        Создать
      </moe-button>
      <moe-button type="ghost">
        Не
      </moe-button>
    </div>
  </div>
</template>
