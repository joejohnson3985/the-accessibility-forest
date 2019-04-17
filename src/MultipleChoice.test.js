import React from 'react';
import MultipleChoice from './MultipleChoice';
import { shallow } from 'enzyme';

const currTerm = '<address>';
const wrongAnswers = ['<article>', '<code>', '<nav>'];
const mockFunc = jest.fn();

describe('MultipleChoice', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <MultipleChoice 
          currentAnswer={currTerm} 
          wrongAnswers={wrongAnswers}
          displayNextTerm={mockFunc}
        />
      )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Should call the function displayNextTerm inside handleAnswer', () => {
    wrapper.instance().handleAnswer();
    expect(mockFunc).toBeCalled();
  })
})