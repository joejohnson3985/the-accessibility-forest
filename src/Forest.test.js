import React from 'react';
import Forest from './Forest';
import { shallow } from 'enzyme';
import Tree1 from './Images/tree1.png'


const mockTrees = [<td key={'test-tree'}><img alt='Geometric tree illustration' src={Tree1}/></td>]
const mockPoints = 2
const mockName = "Joe's forest"

describe('Forest', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <Forest
          trees={mockTrees} 
          points={mockPoints}
          forestName={mockName}
        />
      )
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

describe('Forest no name', () => {
  const noMockName= ""
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <Forest
          trees={mockTrees} 
          points={mockPoints}
          forestName={noMockName}
        />
      )
  });

  it('Should match the snapshot without name', () => {
    expect(wrapper).toMatchSnapshot();
  })
})