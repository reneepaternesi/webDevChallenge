// External libs
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  } 
`

export const TableWrapper = styled.table`
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  text-align: left;
  animation: ${fadeIn} ease 3s;
  background-color: #ffffff;
  border-collapse: separate;
  border-radius: 6px;
`

export const TableHead = styled.thead``

export const TableHeadRow = styled.tr`
  background-color: #8bb1eb;
  color: #ffffff;
  text-align: left;
`

export const TableHeadElement = styled.th`
  text-align: left;
  padding: 12px 15px;
  height: 39px;
`

export const TableHeadBtn = styled.button`
  border: 0;
  font-weight: 700;
  font-size: 16px;
  padding: 0.5em 0;
  margin-bottom: 1px;
  background-color: transparent;
  outline: none;

  &.ascending::after {
    content: '\\21E7';
    display: inline-block;
    margin-left: 1em;
  }

  &.descending::after {
    content: '\\21E9';
    display: inline-block;
    margin-left: 1em;
  }
`

export const TableBody = styled.tbody``

export const TableBodyCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #ccc;
`

export const TableBodyRow = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid #8bb1eb;
  }

  &:hover {
    background-color: #9c9a9e;
  }
`
