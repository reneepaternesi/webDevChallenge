import React from 'react'
import { shallow } from 'enzyme'
import SortableTable from './SortableTable'

describe('SortableTable Test', () => {
  it('should render SortableTable correctly', () => {
    const props = {
      results: [
          {
            "name": "Geonosis", 
            "rotation_period": "30", 
            "orbital_period": "256", 
            "diameter": "11370", 
            "population": "100000000000"
          },
          {
            "name": "Utapau", 
            "rotation_period": "27", 
            "orbital_period": "351", 
            "diameter": "12900", 
            "population": "95000000", 
          }
      ]
    }

    const component = shallow(<SortableTable {...props} />)
    expect(component).toMatchSnapshot()
  })
})
