<template>
  <div id="app">
    <a-button type="primary">
      按钮
    </a-button>
    <label>限制只能输入数字的input</label>
    <a-input
      v-model="message"
      :limit="/\D/g"
      placeholder="只能输入数字"
    />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '12'
    }
  },
  created() {
    console.log(this._.cloneDeep(this.message))
  }
}
</script>
