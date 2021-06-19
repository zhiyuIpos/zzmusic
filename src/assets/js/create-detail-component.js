import MusicList from '@/components/music-list/music-list'
import storage from 'good-storage'
import { processSongs } from '@/service/song'

export default function createDetailComponent (name, key, fetch) {
  return {
    name: name,
    components: {
      MusicList
    },
    props: {
      data: Object
    },
    data () {
      return {
        songs: [],
        loading: true
      }
    },
    computed: {
      pic () {
        const data = this.computedData
        return data && data.pic
      },
      title () {
        const data = this.computedData
        return data && (data.name || data.title)
      },
      computedData () {
        let res = null
        const data = this.data
        if (data) {
          res = data
        } else {
          const cached = storage.session.get(key)
          if (cached && (cached.mid || cached.id + '') === this.$route.params.id) {
            res = cached
          }
        }
        return res
      }
    },
    async created () {
      const data = this.computedData
      console.log(data, '**data**')
      if (!data) {
        const path = this.$route.matched[0].path
        this.$router.push(path)
        return
      }
      const result = await fetch(data)
      const songs = await processSongs(result.songs)
      console.log(result, '***songs', songs)
      this.songs = songs
      this.loading = false
    }
  }
}
