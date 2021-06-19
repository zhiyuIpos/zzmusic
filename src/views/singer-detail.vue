<template>
  <div class="singer-detail">
    <music-list
      :songs="songs"
      :title="title"
      :pic="pic"
      :loading="loading"
    ></music-list>
  </div>
</template>

<script>
import { getSingerDetail } from '@/service/singer'
import createDetailComponent from '@/assets/js/create-detail-component'
import { SINGER_KEY } from '@/assets/js/constant'
// export default {
//   name: 'singer-detail',
//   components: {
//     MusicList
//   },
//   props: {
//     singer: Object
//   },
//   data () {
//     return {
//       songs: [],
//       loading: true
//     }
//   },
//   computed: {
//     pic () {
//       const singer = this.computedSinger
//       return singer && singer.pic
//     },
//     title () {
//       const singer = this.computedSinger
//       return singer && singer.name
//     },
//     computedSinger () {
//       let res = null
//       const singer = this.singer
//       if (singer) {
//         res = singer
//       } else {
//         const cachedSinger = storage.session.get(SINGER_KEY)
//         if (cachedSinger && cachedSinger.mid === this.$route.params.id) {
//           res = cachedSinger
//         }
//       }
//       return res
//     }
//   },
//   async created () {
//     if (!this.computedSinger) {
//       const path = this.$route.matched[0].path
//       this.$router.push(path)
//       return
//     }
//     const result = await getSingerDetail(this.computedSinger)
//     const songs = await processSongs(result.songs)
//     console.log(songs, '***songs')
//     this.songs = songs
//     this.loading = false
//   }
// }
export default createDetailComponent('singer-detail', SINGER_KEY, getSingerDetail)
</script>

<style lang="scss" scoped>
  .singer-detail {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>
