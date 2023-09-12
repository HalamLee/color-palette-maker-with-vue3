<template>
  <div>
    <p>페이지를 찾을 수 없습니다.</p>
    <p>URL을 확인해주세요.</p>
    <RouterLink to="/"><b>Home으로 가기</b></RouterLink>
  </div>
</template>

<style lang="scss" scoped>
div {
  text-align: center;
}

a {
  display: block;
  margin-top: 50px;
  text-decoration: none;
  color: inherit;
  padding: 10px;
  background-color: rgb(39, 100, 178);
  border-radius: 5px;
  color: white;
}
</style>
