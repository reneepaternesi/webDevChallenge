// React
import React from 'react'
import { PaginationWrapper, PaginationBtn, PaginationLabel } from './styles'

const ITEMS_PER_PAGE = 10

interface Props {
  count?: number
  next?: string
  previous?: string
  currentPage?: number
  onPageChanged: (url: string, newPage: number) => void | Promise<void>
}

const Pagination: React.FC<Props> = ({
  count = 0,
  next = '',
  previous = '',
  currentPage = 1,
  onPageChanged = (url: string) => {},
}) => {
  const totalItems = Math.ceil(count / ITEMS_PER_PAGE)

  const handleClickPrev = (url: string, evt: any) => {
    evt.preventDefault()
    const newPage = currentPage > 0 ? currentPage - 1 : currentPage
    onPageChanged(url, newPage)
  }

  const handleClickNext = (url: string, evt: any) => {
    evt.preventDefault()
    const newPage = currentPage < count ? currentPage + 1 : currentPage
    onPageChanged(url, newPage)
  }

  return (
    <PaginationWrapper>
      <PaginationBtn className= "prev-btn" onClick={(e) => handleClickPrev(previous, e)} disabled={!previous ? true : false}>
        &laquo;
      </PaginationBtn>
      <PaginationLabel className="label">
        Page {currentPage} of {totalItems}
      </PaginationLabel>
      <PaginationBtn className= "next-btn" onClick={(e) => handleClickNext(next, e)} disabled={!next ? true : false}>
        &raquo;
      </PaginationBtn>
    </PaginationWrapper>
  )
}

export default Pagination
