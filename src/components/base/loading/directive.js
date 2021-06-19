// import { createApp } from 'vue'
// import loading from './loading'
// import { removeClass, addClass } from '@/assets/js/dom'

// const relativeCls = 'g-relative'
// const loadingDirective = {
//   mounted (el, binding) {
//     const app = createApp(loading)
//     const instance = app.mount(document.createElement('div'))
//     el.instance = instance
//     const title = binding.arg
//     if (typeof title !== 'undefined') {
//       instance.setTitle(title)
//     }
//     if (binding.value) {
//       append(el)
//     }
//   },
//   updated (el, binding) {
//     const title = binding.arg
//     if (typeof title !== 'undefined') {
//       el.instance.setTitle(title)
//     }
//     if (binding.value !== binding.oldValue) {
//       binding.value ? append(el) : remove(el)
//     }
//   }
// }

// function append (el) {
//   // el.instance : loading组件实例
//   const style = getComputedStyle(el)
//   if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
//     addClass(el, relativeCls)
//   }
//   el.appendChild(el.instance.$el)
// }

// function remove (el) {
//   removeClass(el, relativeCls)
//   el.removeChild(el.instance.$el)
// }

// export default loadingDirective
import loading from './loading'
import createLoadingLikeDirective from '@/assets/js/create-loading-like-directive'

const loadingDirective = createLoadingLikeDirective(loading)

export default loadingDirective
