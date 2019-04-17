import React from 'react';
import Learn from './Learn';
import { shallow } from 'enzyme';

const mockWrongAnswers = ["<header>", "<article>", "<cite>"]
const mockCurrentTerm = {type: "html tag", term: "<address>", definition: "Indicates that the enclosed HTML provides contact information for a person or people, or for an organization."}

describe('Learn', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <Learn  
          currentTerm={mockCurrentTerm}
          wrongAnswers={mockWrongAnswers}
        />
      )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

describe('Learn no props', () => {
  const noCurrentTerm = null
  const noWrongAnswers= []
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <Learn  
          currentTerm={noCurrentTerm}
          wrongAnswers={noWrongAnswers}
        />
      )
  });

  it('Should match the snapshot without props', () => {
    expect(wrapper).toMatchSnapshot();
  })
})