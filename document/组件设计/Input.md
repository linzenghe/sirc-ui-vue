## Input 输入框

> 路径：`packages/Input`
沿用ant-design-vue Input 组件，替换，添加自定义规则，比如用户输入限制:

```js
import {Input} from 'ant-design-vue'
import { resolveOnchange } from 'ant-design-vue/lib/input/Input'
export default{
  name:'AInput',
  extends:Input, // 继承Input 子类
  props:{
    limit:{
      type:RegExp, // 正则校验prop
      default:()=>{}
    }
  },
  methods:{
    handleChange:function handleChange(e) {
      e.target.value = e.target.value.replace(this.limit, '')
      var _e$target = e.target
      var value = _e$target.value
      var composing = _e$target.composing
      if (((e.isComposing || composing) && this.lazy) || this.stateValue === value) return
      this.setValue(value, this.clearPasswordValueAttribute)
      resolveOnChange(this.$refs.input, e, this.onChange)
    }
  }
}
```
