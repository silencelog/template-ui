// import test from './test'
import Hello from 'packages/hello'

// 版本号
const version = '0.0.1'
// 全局注入组件前缀
const prefix = 'L'

// 存储组件列表
const components = [
  Hello
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue, config = {}) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component((config.prefix || prefix) + component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  version,
  // 以下是具体的组件列表
  Hello
}
