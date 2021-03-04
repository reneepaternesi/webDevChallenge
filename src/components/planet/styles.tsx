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

export const PlanetWrapper = styled.div`
  animation: ${fadeIn} ease 3s;
`

export const GridInfo = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 40px;
  font-size: 18px;
  background-color: #fff;
  max-width: 80%;
  margin: 0 auto;
  padding: 20px 0;
  border-radius: 8px;
`

export const DataLine = styled.div``

export const DataName = styled.span`
  font-weight: bold;
`

export const TableData = styled.table`
  margin: 0 auto;
`

export const BackButton = styled.button`
border: none;
outline: none;
padding: 10px 20px;
font-weight: bold;
border-radius: 5px;
margin-top: 20px;

&:hover {
  background-color: #9c9a9e;
}
`