<script setup lang="ts">
const emit = defineEmits<{
  (event: 'create', text: string): void
}>()

const textEl = ref<HTMLDivElement | null>()
const isCreating = ref(false)

function onStartCreate() {
  isCreating.value = true
}

function onStopCreate() {
  isCreating.value = false
  if (textEl.value)
    textEl.value.innerText = ''
}

function onCreate() {
  const text = textEl.value?.innerText
  if (text && textEl.value) {
    textEl.value.innerText = ''
    emit('create', text)
  }
}
</script>

<template>
  <template v-if="isCreating">
    <div>
      <div
        ref="textEl"
        contenteditable
        class="
        border border-gray-300
        focus:(outline-none border-orange-300)
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
        <moe-button type="ghost" @click="onStopCreate">
          Не
        </moe-button>
      </div>
    </div>
  </template>
  <template v-else>
    <button
      class="
        flex gap-2 items-center
        text-gray-400 hover:text-gray-700
        dark:(text-gray-500 hover:text-gray-300)
      "
      @click="onStartCreate"
    >
      <carbon:add />
      <div>Новая задача</div>
    </button>
  </template>
</template>
