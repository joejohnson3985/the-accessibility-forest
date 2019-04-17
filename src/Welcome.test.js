import React from 'react';
import Welcome from './Welcome';
import { shallow } from 'enzyme';

const mockFunc = jest.fn();
const e = {target: {value: 'test'}};

describe('Welcome', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <Welcome nameForest={mockFunc}/>
      )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('Should update state of name on change', () => {
    expect(wrapper.state('name')).toEqual('')
    wrapper.find('.name-forest').simulate('change', {target: {value: 'test'}})
    expect(wrapper.state(name)).toEqual('test')
  })

  it('Should call submit name on click', () => {
    wrapper.find('.name-forest-form').simulate('submit', {preventDefault: () => {} })
    expect(mockFunc).toBeCalled();
  })

})