import React, { Component } from 'react';
import './Learn.scss';
import DefinitionCard from './DefinitionCard.js';
import MultipleChoice from './MultipleChoice.js';

class Learn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      termCounter: 0,
      currentTerm: {},
      wrongAnswers: []
    }
    this.displayNextTerm = this.displayNextTerm.bind(this)
  }

  componentWillMount = () => {
    setTimeout(() => {
      this.getCurrentTerm();
    }, 200)
  }

  displayNextTerm = () => {
    let term = this.state.termCounter
    term++
    this.setState({
      termCounter: term
    }, () => {
      this.props.scorePoints();
      this.getCurrentTerm();
    })
  }


  getCurrentTerm = () => {
    let i = this.state.termCounter
    this.setState({
      currentTerm: this.props.data[i],
    }, () => {
      this.getWrongAnswers();
    })
  }

  getWrongAnswers = () => {
    const terms = this.props.data.filter((term) => term.type === this.state.currentTerm.type && term !== this.state.currentTerm)
    const wrongAnswers = [];
    while(wrongAnswers.length !== 3) {
      const rand = Math.floor(Math.random() * terms.length);
      const term = terms[rand];
      if(wrongAnswers.includes(term)) {
        continue
      }
      wrongAnswers.push(term.term)
    }
    this.setState({
      wrongAnswers: wrongAnswers
    })
  }


  render() {
    return (
      <div className='learn-container'>
        <hgroup>
          <h1>Match</h1>
          <h5>Get 3 correct and a tree will grow in your forest!</h5>
        </hgroup>
        <div className='term-container'>
          <DefinitionCard definition={this.state.currentTerm.definition} termType={this.state.currentTerm.type} />
          <MultipleChoice currentAnswer={this.state.currentTerm.term} wrongAnswers={this.state.wrongAnswers} displayNextTerm={this.displayNextTerm} />
        </div>
      </div>
    )
  }
}

export default Learn;