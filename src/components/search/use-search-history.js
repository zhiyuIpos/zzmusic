import { save, remove, clear } from '@/assets/js/array-store'
import { SEARCH_KEY } from '@/assets/js/constant'
import { useStore } from 'vuex'

export default function useSearchHistory() {
  const maxLen = 200

  const store = useStore()

  function saveSearch(query) {
    const searches = save(query, SEARCH_KEY, (item) => {
      return item === query
    }, maxLen)
    console.log(searches, '*****searches')
    store.commit('setSearchHistory', searches)
  }

  function deleteSearch(query) {
    const searches = remove(SEARCH_KEY, (item) => {
      return item === query
    })
    console.log(searches, '*****deleteSearch')
    store.commit('setSearchHistory', searches)
  }

  function clearSearch() {
    const searches = clear(SEARCH_KEY)
    console.log(searches, '*****clearSearch')
    store.commit('setSearchHistory', searches)
  }

  return {
    saveSearch,
    deleteSearch,
    clearSearch
  }
}
