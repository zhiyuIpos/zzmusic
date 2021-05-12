<template>
  <div class="recommend" v-loading:[loadingText]="loading">
    <scroll class="recommend-content">
      <div>
        <div class="slider__wrapper">
          <div class="slider__wrapper__content">
            <slider v-if="sliders.length" :sliders="sliders"></slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
          <ul>
            <li
              v-for="item in albums"
              class="item"
              :key="item.id"
              @click="selectItem(item)"
            >
              <div class="icon">
                <img width="60" height="60" v-lazy="item.pic">
              </div>
              <div class="text">
                <h2 class="name">
                  {{ item.username }}
                </h2>
                <p class="title">
                  {{item.title}}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, reactive } from 'vue'
import { getRecommend } from '@/service/recommend'
import Slider from '@/components/base/slider/slider'
import Scroll from '@/components/base/scroll/scroll'
export default defineComponent({
  name: 'recomend',
  components: {
    Slider,
    Scroll
  },
  setup () {
    const sliders = reactive([])
    const albums = reactive([])
    const loadingText = '正在载入'
    function selectItem (item) {
      console.log(item, 'iiitem**')
    }
    const loading = computed(() => {
      return !sliders.length && !albums.length
    })

    onMounted(async () => {
      const result = await getRecommend()
      sliders.push(...result.sliders)
      albums.push(...result.albums)
    })
    return {
      sliders,
      albums,
      selectItem,
      loading,
      loadingText
    }
  }
})
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  // overflow: scroll;
  .recommend-content {
    height: 100%;
    overflow: hidden;
  }
  .slider__wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 40%;
    overflow: hidden;
    &__content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }
    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;

      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;
      }
      .name {
        margin-bottom: 10px;
        color: $color-text;
      }
      .title {
        color: $color-text-d;
      }
    }
  }
}
</style>
