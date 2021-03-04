import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';


beforeAll(() => {
  global.fetch = jest.fn();
});

let wrapper;

beforeEach(() => {
  wrapper = mount(<App />, { disableLifecycleMethods: true });
});

afterEach(() => {
  wrapper.unmount();
});

it("renders without crashing", () => {
  wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
});

it("must render a loading span before api call success", () => {
  const loading = wrapper.find('h1.loading'); 
  expect(loading.text()).toBe('Loading...')
});