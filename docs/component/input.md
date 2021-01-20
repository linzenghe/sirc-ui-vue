# 输入框 input

::: demo
```vue
<template>
  <div>
      <p>{{ label }}</p>
      <a-input v-model="value" :limit="/\D/g" placeholder="只能输入数字"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      label: '输入框只能输入数字',
      value: ''
    }
  }
}
</script>
```
:::

## input Attributes


| 参数      | 说明    | 类型      | 可选值       | 默认值   |  
|---------- |-------- |---------- |---------- |---------- |  
| limit | 限制输入正则 | RegExp | — | — |