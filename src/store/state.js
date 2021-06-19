import { PLAY_MODE, SEARCH_KEY } from '@/assets/js/constant'
// , FAVORITE_KEY, SEARCH_KEY, PLAY_KEY
import { load } from '@/assets/js/array-store'
const state = {
  sequenceList: [],
  playlist: [],
  palying: false,
  playMode: PLAY_MODE.sequence,
  currentIndex: 0,
  fullScreen: false, // 是否全屏播放
  favoriteList: [], // load(FAVORITE_KEY)
  searchHistory: load(SEARCH_KEY), //
  playHistory: [] // load(PLAY_KEY)
}

export default state
