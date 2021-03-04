import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import SortableTable from './components/sortable-table/SortableTable'
import Pagination from './components/pagination'
// Styles
import GlobalStyle from './globalStyles'

function App() {
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const ensureHttps = (url) => {
    if (!url) {
      return ''
    }
    return url.replace('http://', 'https://')
  }

  const fetchData = useCallback(async (url) => {
    setIsFetching(true)
    const secureUrl = ensureHttps(url ? url : 'https://swapi.dev/api/planets/')
    const response = await axios.get(secureUrl);
    setData(response.data);
    setIsFetching(false)
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handlePageChange = (url, newPage) => {
    fetchData(url)
    setCurrentPage(newPage)
  }

  return (
    <div className="App">
      <GlobalStyle />
      {isFetching && <h1 className="loading">Loading...</h1>}
      {!isFetching && data && data.results && data.results.length > 0 && (
        <>
          <h1>Planets</h1>
          <SortableTable results={data.results} />
          <Pagination 
            count={data.count}
            next={data.next}
            previous={data.previous}
            onPageChanged={handlePageChange}
            currentPage={currentPage}
          />
        </>
      )}
      {!isFetching && (!data || !data.results || data.results.length === 0) && <h2>No planets where retrieved</h2>}
    </div>
  )
}

export default App;
