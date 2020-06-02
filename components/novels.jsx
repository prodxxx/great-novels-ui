import React, { useEffect, useState } from 'react'
import Search from './search'
import Novel from './novel'
import { filterNovels, retrieveNovels } from '../utils/novels'
import authors from '../models/authors'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [novelList, setNovelList] = useState([])
  const [filteredNovelList, setFilteredNovelList] = useState([])
  useEffect(() => {
    async function pullData() {
      const novels = await retrieveNovels()

      setNovelList(novels)
      setFilteredNovelList(novels)
    }

    pullData()
  }, [])

  useEffect(() => {
    const filtered = filterNovels(novelList, searchTerm)

    setFilteredNovelList(filtered)
  }, [searchTerm])

  return (
    <div className="page">
      <div className="title">Great Novels</div>
      <div className="subtitle">A searchable list of great novels</div>
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        filteredNovelList.map(novel => (
          <Novel
            key={novel.id}
            id={novel.id}
            title={novel.title}
            name={`by ${novel.author.nameFirst} ${novel.author.nameLast}`}
          />
        ))
      }
    </div>
  )
}
