<template>
  <ColorPicker
    is-widget
    format="hex"
    shape="square"
    picker-type="chrome"
    use-type="pure"
    disable-history
    disable-alpha
    :pure-color="currentColor"
    v-on:update:pureColor="emitChangeColor" />
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  currentColor: String,
});

const emit = defineEmits(['change-color']);

const emitChangeColor = (color) => {
  emit('change-color', color);
};

const currentColor = ref(props.currentColor);

watch(
  () => props.currentColor,
  (newColor) => {
    currentColor.value = newColor;
    console.log('pureColor', props.currentColor);
  }
);
</script>

<style>
.vc-colorpicker {
  width: 300px !important;
}
</style>
