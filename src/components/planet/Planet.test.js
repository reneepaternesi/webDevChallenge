import React from 'react'
import { shallow } from 'enzyme'
import Planet from './Planet'

const mockUseLocationValue = {
  pathname: '/planet',
  search: '',
  hash: '',
  state: null,
}

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: jest.fn().mockImplementation(() => {
    return mockUseLocationValue
  }),
}))

let wrapper

beforeEach(() => {
  wrapper = shallow(<Planet />)
})

describe('Planet Test', () => {
  it('should render Planet correctly', () => {
    mockUseLocationValue.state = {
      planet: {
        climate: 'temperate',
        created: '2014-12-10T11:50:29.349000Z',
        diameter: '4900',
        edited: '2014-12-20T20:58:18.429000Z',
        films: ['http://swapi.dev/api/films/3/'],
        gravity: '0.85 standard',
        name: 'Endor',
        orbital_period: '402',
        population: '30000000',
        residents: ['http://swapi.dev/api/people/30/'],
        rotation_period: '18',
        surface_water: '8',
        terrain: 'forests, mountains, lakes',
        url: 'http://swapi.dev/api/planets/7/',
      },
    }
    expect(wrapper).toMatchSnapshot()
  })
})
