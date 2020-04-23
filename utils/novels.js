import fetchNovels from '../actions/novels'

export const filterNovels = (list, term, setter) => {
  const filtered = list.filter(novel => novel.title.toLowerCase().includes(term.toLowerCase()))

  setter(filtered)
}

export const retrieveNovels = async (listSetter, filteredListSetter) => {
  const novels = await fetchNovels()

  listSetter(novels)
  filteredListSetter(novels)
}
