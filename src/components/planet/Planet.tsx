// React
import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
// Styles
import GlobalStyle from '../../globalStyles'
import { PlanetWrapper, GridInfo, DataLine, DataName, TableData, BackButton } from './styles'

interface Props {}

const Planet: React.FC<Props> = () => {
  const [element, setElement] = useState<any | null>(null)
  const location = useLocation()
  const  history = useHistory();

  useEffect(() => {
    setElement(location.state)
  }, [location])

  const handleGoBack = () => {
    history.goBack()
  }

  return (
    <PlanetWrapper>
      <GlobalStyle />
      <h1>{element?.planet.name}</h1>
      <GridInfo>
        <DataLine>
          <DataName>Rotation Period:</DataName> {element?.planet.rotation_period}
        </DataLine>
        <DataLine>
          <DataName>Orbital Period:</DataName> {element?.planet.orbital_period}
        </DataLine>
        <DataLine>
          <DataName>Climate:</DataName> {element?.planet.climate}
        </DataLine>
        <DataLine>
          <DataName>Gravity:</DataName> {element?.planet.gravity}
        </DataLine>
        <DataLine>
          <DataName>Terrain:</DataName> {element?.planet.terrain}
        </DataLine>
        <DataLine>
          <DataName>Surface Water:</DataName> {element?.planet.surface_water}
        </DataLine>
        <DataLine>
          <DataName>Population:</DataName> {element?.planet.population}
        </DataLine>
        <DataLine />
        <DataLine>
          <DataName>Residents:</DataName>
          <TableData>
            <tbody>
              {element?.planet.residents.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </TableData>
        </DataLine>
        <DataLine>
          <DataName>Films:</DataName>
          <TableData>
            <tbody>
              {element?.planet.films.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </TableData>
        </DataLine>
      </GridInfo>
      <BackButton onClick={handleGoBack}> Go Back </BackButton>
    </PlanetWrapper>
  )
}

export default Planet
