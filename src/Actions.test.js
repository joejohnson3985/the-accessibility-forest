import React from 'react';
import Actions from './Actions';
import { shallow } from 'enzyme';
import Tree1 from './Images/tree1.png'

const mockGetWrongAnswers = jest.fn();
const mockData = {
  terms: [
  {
    type: "html tag",
    term: "<address>",
    definition: "Indicates that the enclosed HTML provides contact information for a person or people, or for an organization."
  },
  {
    type: "html tag",
    term: "<header>",
    definition: "Represents introductory content, typically a group of introductory or navigational aids."
  },
  {
    type: "html tag",
    term: "<article>",
    definition: "Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable."
  },
  {
    type: "attribute",
    term: "aria-valuenow",
    definition: "is used to define the current value for a range widget such as a slider, spinbutton or progressbar."
  },
  {
    type: "attribute",
    term: "aria-valuetext",
    definition: "Is used to define the human readable text alternative of aria-valuenow for a range widget such as progressbar, spinbutton or slider. Only should be used when the rendered value cannot be accuratly represented as a number."
  },
  {
    type: "attribute",
    term: "aria-controls",
    definition: "Is used to associate a control with the regions that it controls. Regions are identified just like an id in a div, and multiple regions can be associated with a control using a space"
  }
]}


describe('Actions', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <Actions getWrongAnswers={mockGetWrongAnswers}/>
      )
  });
  
  describe('defaults', () => {
    it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('Should have default state', () => {
      expect(wrapper.state()).toEqual({
        data: [],
        correctTerms: [],
        termCounter: 0,
        wrongAnswers: [],
        currentTerm: null,
        forestName: '',
        points: 0,
        treesToRender: [
          <td key='first-tree'>
            <img alt='Geometric tree illustration' src={Tree1}/>
          </td>
        ]
      })
    });
    it('Should have a function getJsonData', () => {
      wrapper.instance().getJsonData();
    })
  })

  describe('Actions with forestName on load', () => {
    beforeEach(() => {
      wrapper.state().data = mockData.terms
    })
    it('Should match snapshot with a forestName', () => {
      expect(wrapper).toMatchSnapshot();
    })
  
  })

  describe('METHODS', () => {
    beforeEach(() => {
      wrapper.state().data = mockData.terms
    })
    describe('getCurrentTerm', () => {
      it('Should have a function getCurrentTerm', () => {
        wrapper.instance().getCurrentTerm();
      })
      it('Should change currentTerm state when getCurrentTerm is fired', () => {
        expect(wrapper.state().currentTerm).toEqual(null)
        wrapper.state().termCounter = 0;
        wrapper.instance().getCurrentTerm();
        expect(wrapper.state().currentTerm).toEqual({
          type: "html tag",
          term: "<address>",
          definition: "Indicates that the enclosed HTML provides contact information for a person or people, or for an organization."
        })
      })
      it.skip('Should call getWrongAnswers inside of getCurrentTerm', () => {
        wrapper.instance().getCurrentTerm();
        expect(mockGetWrongAnswers).toHaveBeenCalled();
      });
      it('Should only assign currentTerm to a term that is not in correctTerms', () => {
        wrapper.state().correctTerms = ["<address>", "<header>"];
        wrapper.state().termCounter = 0
        wrapper.instance().getCurrentTerm();
        expect(wrapper.state().currentTerm).toEqual({
          type: "html tag",
          term: "<article>",
          definition: "Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable."
        })
      })
    });
    describe('getWrongAnswers', () => {
      it('Should have the function getWrongAnswers', () => {
        wrapper.state().currentTerm = {
          type: "html tag",
          term: "<header>",
          definition: "Represents introductory content, typically a group of introductory or navigational aids."
        }
        wrapper.instance().getWrongAnswers();
      });
      it('Should update the state of wrongAnswers', () => {
        wrapper.state().currentTerm = {
          type: "html tag",
          term: "<header>",
          definition: "Represents introductory content, typically a group of introductory or navigational aids."
        }
        wrapper.instance().getWrongAnswers();
        expect(wrapper.state().wrongAnswers.length).toEqual(3)
      });
    })

    describe('displayNextTerm', () => {
      it('Should be a function', () => {
        wrapper.instance().displayNextTerm;
      })
      it('Should update termCounter and correctTerms if answer is correct', () => {
        let answer = "<header>"
        wrapper.state().correctTerms = []
        wrapper.state().termCounter = 0
        wrapper.state().currentTerm = {
          type: "html tag",
          term: "<header>",
          definition: "Represents introductory content, typically a group of introductory or navigational aids."
        }
        wrapper.instance().displayNextTerm(answer);
        expect(wrapper.state().termCounter).toEqual(1)
        expect(wrapper.state().correctTerms).toEqual(["<header>"])
      })
      it('Should only update termCounter if answer is incorrect', () => {
        let answer = "<address>"
        wrapper.state().correctTerms = []
        wrapper.state().termCounter = 0
        wrapper.state().currentTerm = {
          type: "html tag",
          term: "<header>",
          definition: "Represents introductory content, typically a group of introductory or navigational aids."
        }
        wrapper.instance().displayNextTerm(answer);
        expect(wrapper.state().termCounter).toEqual(1)
        expect(wrapper.state().correctTerms).toEqual([])

      })

    })

    describe('scorePoints', () => {
      it('Shold be a method', () => {
        wrapper.instance().scorePoints();
      })
      it('Should update state of points', () => {
        wrapper.state().points = 3
        wrapper.instance().scorePoints();
        expect(wrapper.state().points).toEqual(4)
      })
    })

    describe('generateForest', () => {
      it('Should be a function', () => {
        wrapper.instance().generateForest();
      })
      it('Should update the treesToRender state', () => {
        let points = 6
        expect(wrapper.state().treesToRender.length).toEqual(2)
        wrapper.instance().generateForest(points)
        expect(wrapper.state().treesToRender.length).toEqual(4)
      })
    })

    describe('addTrees', () => {
      it('Should be a function', () => {
        wrapper.instance().addTrees();
      })
      it('Should update treesToRender state', () => {
        expect(wrapper.state().treesToRender.length).toEqual(2)
        wrapper.instance().addTrees();
        expect(wrapper.state().treesToRender.length).toEqual(3)
      })
    })
  })
})