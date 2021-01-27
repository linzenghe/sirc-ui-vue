## Lodash JavaScript 实用工具库

引入lodash 工具库

> 路径： `src/utils/lodash`


```js
import Lodash from 'lodash'
export default {
  install: function (Vue, name = '_') {
    Object.defineProperty(Vue.prototype, name, { value: Lodash })
  }
}
```
