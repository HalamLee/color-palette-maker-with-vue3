<template>
  <main>
    <h1>Color Palette</h1>
    <div v-if="isSavedColors" class="color-palette">
      <template v-for="color in colors" :key="color.id">
        <ColorBox
          :id="color.id"
          :color="color.color"
          @click="clickHandler(color)"
          >{{ color.color }}</ColorBox
        >
      </template>
    </div>
    <button @click="goPage">
      {{ buttonText }}
    </button>
  </main>
</template>

<script setup>
import ColorBox from '../components/ColorBox.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const colors = ref([]);
const isSavedColors = Boolean(localStorage.getItem('color'));

const savedColors = localStorage.getItem('color');
colors.value = JSON.parse(savedColors);

const clickHandler = (color) => {
  navigator.clipboard.writeText(color.color).then(() => {
    alert(`${color.color} 복사되었습니다.`);
  });
};

const buttonText = ref(localStorage.getItem('color') ? '수정하기' : '생성하기');

const goPage = () => {
  if (localStorage.getItem('color')) {
    router.push('/edit');
  } else {
    router.push('/create');
  }
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
h1 {
  margin-bottom: 0px;
}

.color-palette {
  & :not(:last-of-type) {
    margin-bottom: 20px;
  }
}

button {
  width: 150px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: rgb(182, 228, 168);
}
</style>
