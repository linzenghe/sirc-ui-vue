<template>
  <button class="s-button" @click="handleClick">{{text}}</button>
</template>

<script>
export default {
  name: 'SButton',
  data () {
    return {
        text:'测试按钮'
    }
  },
  methods: {
      handleClick(){
          alert(1)
      }
  }
}
</script>

<style scoped lang='scss'>
.s-button {
  width: 100px;
  height: 30px;
  background-color: rgb(79, 255, 246);
  font-size: 13px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
