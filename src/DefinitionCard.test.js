import React from 'react';
import DefinitionCard from './DefinitionCard';
import { shallow } from 'enzyme';

const currentDeff = 'Indicates that the enclosed HTML provides contact information for a person or people, or for an organization.'
const currentType = 'html tag'

describe('DefinitionCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <DefinitionCard 
          definition={currentDeff} 
          termType={currentType}
        />
      )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})