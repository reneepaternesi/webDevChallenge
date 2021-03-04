import React from 'react'
import { shallow, mount } from 'enzyme'
import Pagination from './Pagination'

describe('Pagination Test', () => {
  const props = {
    count: 60,
    next: 'http://swapi.dev/api/planets/?page=2',
    previous: null,
    currentPage: 1,
    onPageChanged: jest.fn(),
  }

  let wrapper

  beforeEach(() => {
    wrapper = mount(<Pagination {...props} />)
  })
  it('should render Pagination correctly', () => {
    wrapper = shallow(<Pagination {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should has prev button disabled', () => {
    const prevBtn = wrapper.find('button.prev-btn')
    expect(prevBtn.props().disabled).toBe(true)
  })

  it('should has 6 pages', () => {
    const label = wrapper.find('span.label')
    expect(label.text()).toBe('Page 1 of 6')
  })
})
