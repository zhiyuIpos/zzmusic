import Scroll from '@/components/base/scroll/scroll'
import {
  h,
  mergeProps,
  renderSlot,
  withCtx,
  computed,
  ref,
  watch,
  nextTick
} from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'wrap-scroll',
  props: Scroll.props,
  emits: Scroll.emits,
  render(ctx) {
    return h(Scroll, mergeProps(
      { ref: 'scrollRef' },
      ctx.$props,
      {
        onScroll: (e) => {
          ctx.$emit('scroll', e)
        }
      }
    ), {
      default: withCtx(() => {
        return [renderSlot(ctx.$slots, 'default')]
      })
    })
  },
  setup () {
    const scrollRef = ref(null)
    const store = useStore()
    const playlist = computed(() => store.state.playlist)
    const scroll = computed(() => scrollRef.value.scroll)
    watch(playlist, async () => {
      await nextTick()
      scroll.value.refresh()
    })
    return {
      scrollRef,
      scroll
    }
  }
}
