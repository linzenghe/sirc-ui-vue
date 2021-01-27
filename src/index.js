
import {
  Affix,
  AutoComplete,
  Alert,
  // Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  // Calendar,
  Card,
  Collapse,
  // Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  FormModel,
  Icon,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  // Mentions,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  // Progress,
  Radio,
  Rate,
  Row,
  Select,
  // Slider,
  Spin,
  // Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  // Comment,
  ConfigProvider,
  Empty,
  Result,
  Descriptions,
  // PageHeader,
  message,
  notification
} from 'ant-design-vue'
import Input from '../packages/Input'
import 'ant-design-vue/dist/antd.css'
import Lodash from './utils/lodashUtil'
import { version } from '../package.json'

import dictionaryUtil from './utils/DictionaryUtil' // 字典服务

const components = [
  Affix,
  AutoComplete,
  Alert,
  // Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  // Calendar,
  Card,
  Collapse,
  // Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  FormModel,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  // Mentions,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  // Progress,
  Radio,
  Rate,
  Row,
  Select,
  // Slider,
  Spin,
  // Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  // Comment,
  ConfigProvider,
  Empty,
  Result,
  Descriptions
  // PageHeader,
]
const install = function(Vue, opts = {}) {
  let { getDictionary, store } = opts
  // 判断是否安装
  if (install.installed) {
    return
  }
  // 加载通用类属性
  dictionaryUtil.init(getDictionary, store)
  // 加载组件
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
  // vue 原型上添加方法
  Vue.prototype.$message = message
  Vue.prototype.$notification = notification
  Vue.prototype.$info = Modal.info
  Vue.prototype.$success = Modal.success
  Vue.prototype.$error = Modal.error
  Vue.prototype.$warning = Modal.warning
  Vue.prototype.$confirm = Modal.confirm
  Vue.prototype.$destroyAll = Modal.destroyAll
  Vue.use(Lodash)

  Vue.prototype.$dictionary = dictionaryUtil
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install,
  ...components
}
