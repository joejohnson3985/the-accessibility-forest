import React, { Component } from 'react';
import './Actions.scss'
import Welcome from './Welcome.js';
import Learn from './Learn.js';
import Forest from './Forest.js';
import Tree1 from './Images/tree1.png'
import Tree2 from './Images/tree2.png'
import Tree3 from './Images/tree3.png'
import Tree4 from './Images/tree4.png'
import Tree5 from './Images/tree5.png'

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    }
  }

  getJsonData = () => {
    fetch(`https://fe-apps.herokuapp.com/api/v1/memoize/1901/joejohnson3985/terms`)
    .then(data => data.json())
    .then(data => {
      this.setState({ data: data.terms }, () => {
        this.getCurrentTerm();
      })
    })
    .catch(error => console.error(error))
  }

  componentWillMount() {
    localStorage.getItem('forestName') && this.setState({
      forestName: JSON.parse(localStorage.getItem('forestName'))
    })
    localStorage.getItem('points') && this.setState({
      points: JSON.parse(localStorage.getItem('points'))
    })
    localStorage.getItem('correctTerms') && this.setState({
      correctTerms: JSON.parse(localStorage.getItem('correctTerms'))
    })
  }

  componentDidMount() {
    this.generateForest(this.state.points);
    this.getJsonData();
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('forestName', JSON.stringify(nextState.forestName));
    localStorage.setItem('points', JSON.stringify(nextState.points));
    localStorage.setItem('correctTerms', JSON.stringify(nextState.correctTerms));
  }

  getCurrentTerm = () => {
    let filteredData = this.state.data.filter(term => {
      let correctTermsContainsTerm = this.state.correctTerms.find(correctTerm => correctTerm === term.term)
      return !correctTermsContainsTerm
    })
    let i = this.state.termCounter
    if(!this.state.data.length) {
      return
    }
    this.setState({
      currentTerm: filteredData[i]
    }, () => {
      this.getWrongAnswers();
    })
  }

  getWrongAnswers = () => {
    const terms = this.state.data.filter((term) => term.type === this.state.currentTerm.type && term !== this.state.currentTerm)
    const wrongAnswers = [];
    while(wrongAnswers.length !== 3) {
      const rand = Math.floor(Math.random() * terms.length);
      const term = terms[rand];
      if(wrongAnswers.includes(term)) {
        continue
      }
      wrongAnswers.push(term.term)
    }
    // console.log(wrongAnswers)
    this.setState({
      wrongAnswers: wrongAnswers
    })
  }

  displayNextTerm = (answer) => {
    let term = this.state.termCounter
    term++
    if(answer === this.state.currentTerm.term) {
      let correctTerms = this.state.correctTerms;
      correctTerms.push(answer)
      this.setState({
        termCounter: term,
        correctTerms: correctTerms
      }, () => {
      this.scorePoints();
      })
    } else {
      this.setState({
        termCounter: term
      }, () => {
        this.getCurrentTerm();
      })
    }
  }

  scorePoints = () => {
    let score = this.state.points
    score++
    this.setState({
      points: score
    }, () => {
      this.getCurrentTerm()
      if((score % 3) === 0) {
       this.addTrees();
      }
    })
  }

  generateForest = (points) => {
    const treeImgs = [Tree1, Tree2, Tree3, Tree4, Tree5]
    const trees =  Object.assign([], this.state.treesToRender)
    for(let j = 0; j < Math.floor(points / 3); j++) {
      let i = Math.floor(Math.random() * treeImgs.length)
      trees.push(
        <td key={j}>
          <img alt='Geometric tree illustration' src={treeImgs[i]}/>
        </td>
      )
    }
    this.setState({ 
      treesToRender: trees,
    })
  }

  addTrees = () => {
    const treeImgs = [Tree1, Tree2, Tree3, Tree4, Tree5]
    let i = Math.floor(Math.random() * treeImgs.length)
    const trees =  Object.assign([], this.state.treesToRender)
      trees.push(
        <td key={Date.now()}>
          <img alt='Geometric tree illustration' src={treeImgs[i]}/>
        </td>
      )
    this.setState({ 
      treesToRender: trees,
    })
  }

  nameForest = (name) => {
    this.setState({
      forestName: name
    })
  }

  render() {
    let whatToRender;
    if(!this.state.forestName) {
      whatToRender = <Welcome nameForest={this.nameForest}/>
    } else {
      whatToRender = <Learn getCurrentTerm={this.getCurrentTerm} displayNextTerm={this.displayNextTerm} scorePoints={this.scorePoints} currentTerm={this.state.currentTerm} wrongAnswers={this.state.wrongAnswers}/>
    }
    return (
      <div>
        <div className='actions-container'>
          {whatToRender}
        </div>
        <Forest trees={this.state.treesToRender} points={this.state.points} forestName={this.state.forestName} />
      </div>
    )
  }
}

export default Actions;