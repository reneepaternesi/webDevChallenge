// External libs
import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  margin-top: 30px;
`

export const PaginationBtn = styled.button`
  border: none;
  outline: none;
  font-size: 18px;
  padding: 0 10px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover:not([disabled]) {
    background-color: #3763B0;
  }
`

export const PaginationLabel = styled.span`
  font-size: 14px;
  color: #ffffff;
`
