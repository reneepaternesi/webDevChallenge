import React, { useState, useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import {
  TableWrapper,
  TableHead,
  TableHeadRow,
  TableHeadElement,
  TableHeadBtn,
  TableBody,
  TableBodyRow,
  TableBodyCell,
} from './styles'

const useSortableData = (items: any, config?: any) => {
  const [sortConfig, setSortConfig] = useState(config)

  const sortedItems = useMemo(() => {
    let sortableItems = [...items]
    if (sortConfig) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig?.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key: any) => {
    let direction = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}

interface Props {
  results: Array<{
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    population: string
  }>
}

const SortableTable: React.FC<Props> = ({ results }) => {
  const { items, requestSort, sortConfig } = useSortableData(results)
  const history = useHistory()

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }

  const navigateTo = (item: any) => history.push({
    pathname: '/planet',
    state: { planet: item }
  })

  return (
    <TableWrapper>
      <TableHead>
        <TableHeadRow>
          <TableHeadElement>
            <TableHeadBtn type="button" onClick={() => requestSort('name')} className={getClassNamesFor('name')}>
              Name
            </TableHeadBtn>
          </TableHeadElement>
          <TableHeadElement>
            <TableHeadBtn
              type="button"
              onClick={() => requestSort('rotation_period')}
              className={getClassNamesFor('rotation_period')}
            >
              Rotation Period
            </TableHeadBtn>
          </TableHeadElement>
          <TableHeadElement>
            <TableHeadBtn
              type="button"
              onClick={() => requestSort('orbital_period')}
              className={getClassNamesFor('orbital_period')}
            >
              Orbital Period
            </TableHeadBtn>
          </TableHeadElement>
          <TableHeadElement>
            <TableHeadBtn
              type="button"
              onClick={() => requestSort('diameter')}
              className={getClassNamesFor('diameter')}
            >
              Diameter
            </TableHeadBtn>
          </TableHeadElement>
          <TableHeadElement>
            <TableHeadBtn
              type="button"
              onClick={() => requestSort('population')}
              className={getClassNamesFor('population')}
            >
              Population
            </TableHeadBtn>
          </TableHeadElement>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {items.map((item, index) => (
          <TableBodyRow key={index} onClick={() => navigateTo(item)}>
            <TableBodyCell>{item.name}</TableBodyCell>
            <TableBodyCell>{item.rotation_period}</TableBodyCell>
            <TableBodyCell>${item.orbital_period}</TableBodyCell>
            <TableBodyCell>{item.diameter}</TableBodyCell>
            <TableBodyCell>{item.population}</TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </TableWrapper>
  )
}

export default SortableTable
