<template>
  <main>
    <div>
      <div class="color-palette">
        <template v-for="color in colors" :key="color.id">
          <ColorBox
            :id="color.id"
            :color="color.color"
            :selected="selected === color.id"
            @select="selectEmit" />
        </template>
      </div>
      <ColorPicker @change-color="changeColor" :current-color="currentColor" />
    </div>
    <div>
      <button @click="cancelHandler">취소하기</button>
      <button @click="saveHandler">저장하기</button>
    </div>
  </main>
</template>

<script setup>
import ColorPicker from '../components/ColorPicker.vue';
import ColorBox from '../components/ColorBox.vue';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selected = ref(1); // 초기값으로 id 1번 선택
const colors = ref([
  { id: 1, color: '#000000' },
  { id: 2, color: '#000000' },
  { id: 3, color: '#000000' },
  { id: 4, color: '#000000' },
  { id: 5, color: '#000000' },
]);
const currentColor = ref('');

// selected 값이 변경될 때 currentColor 업데이트
watch(selected, (newSelected) => {
  const selectedColor = colors.value.find((color) => color.id === newSelected);
  if (selectedColor) {
    currentColor.value = selectedColor.color;
  }
});

const changeColor = (color) => {
  currentColor.value = color;

  // 선택한 ID에 해당하는 색상 객체를 찾음
  const selectedColor = colors.value.find(
    (colorObj) => colorObj.id === selected.value
  );

  // 색상 객체가 존재하면 해당 객체의 color 속성을 업데이트
  if (selectedColor) {
    selectedColor.color = color;
    currentColor.value = color;
  }
};

const selectEmit = (id) => {
  selected.value = id;
  const selectedColor = colors.value.find((color) => color.id === id);
  if (selectedColor) {
    currentColor.value = selectedColor.color;
  }
};

const cancelHandler = () => {
  router.push('/');
};

const saveHandler = () => {
  localStorage.setItem('color', JSON.stringify(colors.value));
  if (localStorage.getItem('color')) {
    alert('저장되었습니다.');
    router.push('/');
  }
};
</script>

<style scoped>
main {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 200px;
  }
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
  &:first-child {
    background-color: rgb(188, 188, 188);
    margin-right: -100px;
  }
}
</style>
