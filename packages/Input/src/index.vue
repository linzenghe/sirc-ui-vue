<script>
import { Input } from 'ant-design-vue'
import { resolveOnChange } from 'ant-design-vue/lib/input/Input'
export default {
  name: 'AInput',
  extends: Input, // 拓展
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
      e.target.value = e.target.value.replace(this.limit, '') // 进行正则匹配
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
