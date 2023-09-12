<template>
  <div
    @click="clickHandler"
    :style="{ backgroundColor: color }"
    :class="{
      selected: props.selected,
    }">
    <slot />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  id: Number,
  color: String,
  selected: Boolean,
});

const emit = defineEmits(['select']);

const color = ref(props.color);

watch(
  () => props.color,
  (newColor) => {
    color.value = newColor;
  }
);

const clickHandler = () => {
  emit('select', props.id);
};
</script>

<style lang="scss" scoped>
div {
  width: 200px;
  height: 50px;
  border: 10px dashed transparent;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: transparent;
  &:hover {
    cursor: pointer;
    color: white;
  }
}

.selected {
  border: 10px solid red;
}
</style>
