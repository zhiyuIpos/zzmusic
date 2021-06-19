import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'

BScroll.use(ObserveDOM)
export default function useScroll (wrapperRef, options, emit) {
  const scroll = ref(null)
  onMounted(() => {
    const scrollVal = scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })

    if (options.probeType > 0) {
      scrollVal.on('scroll', (pos) => {
        emit('scroll', pos)
      })
    }
  })
  // 如果使用使用了keep-alive， 不会触发这个钩子函数
  onUnmounted(() => {
    scroll.value.destroy()
  })

  // keep-alive 的钩子函数触发
  onActivated(() => {
    scroll.value.enable()
    scroll.value.refresh()
  })

  onDeactivated(() => {
    scroll.value.disable() // 禁用
  })
  return scroll
}
