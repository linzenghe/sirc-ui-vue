<!--
 * @Author: zenghe
 * @Date: 2021-01-20 13:41:27
 * @LastEditTime: 2021-01-20 14:48:18
 * @LastEditors: Do not edit
 * @FilePath: \lib-starter\packages\Input\src\index.vue
 * @Description:
-->

<script>
import { Input } from 'ant-design-vue'
import { resolveOnChange } from 'ant-design-vue/lib/input/Input'
export default {
  name: 'AInput',
  extends: Input,
  props: {
    limit: {
      type: RegExp,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  methods: {
    handleChange: function handleChange(e) {
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
</script>
