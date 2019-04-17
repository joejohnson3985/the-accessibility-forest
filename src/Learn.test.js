import React from 'react';
import ReactDOM from 'react-dom';
import Learn from './Learn';
import { shallow } from 'enzyme';

const mockWrongAnswers = ["<header>", "<article>", "<cite>"]
const mockCurrentTerm = {type: "html tag", term: "<address>", definition: "Indicates that the enclosed HTML provides contact information for a person or people, or for an organization."}

describe('App', () => {
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

  it('Should match snapshot when props are not avaiable', () => {
    wrapper.props().currentTerm = []
    wrapper.props().wrongAnswers = {}
    expect(wrapper).toMatchSnapshot();
  })
})