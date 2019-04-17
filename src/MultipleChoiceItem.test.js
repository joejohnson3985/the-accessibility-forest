
import React from 'react';
import MultipleChoiceItem from './MultipleChoiceItem';
import { shallow } from 'enzyme';

const mockFunc = jest.fn();
const mockChoice = "<address>"
const mockKey = "testkey"

describe('MultipleChoiceItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <MultipleChoiceItem
          choice={mockChoice} 
          key={mockKey} 
          handleAnswer={mockFunc}
        />
      )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('Should fire handleClick on click', () => {
    wrapper.find('.choice-btn').simulate('click', {preventDefault: () => {} })
    expect(mockFunc).toBeCalled();
  })
})