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
      forestName: '',
      learn: false,
      practice: false,
      points: 0,
      forestSize: 1,
      treesToRender: []
    }
  }

  componentDidMount() {
    this.addTrees();
  }

  scorePoints = () => {
    let score = this.state.points
    score++
    this.setState({
      points: score
    }, () => {
      this.growTrees();
    })
  }

  growTrees = () => {
    let  numPoints = this.state.points
    let treeCount = this.state.forestSize;
    if((numPoints % 4) === 0) {
      console.log('New Tree')
      treeCount++
      this.setState({
        forestSize: treeCount,
      }, () => {
        this.addTrees();
      })
    } else {
      console.log('need mo points')
    }
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
      whatToRender = <Learn scorePoints={this.scorePoints} data={this.props.data}/>
    }
    return (
      <div>
        <div className='actions-container'>
          {whatToRender}
        </div>
        <Forest trees={this.state.treesToRender} forestName={this.state.forestName} />
      </div>
    )
  }
}

export default Actions;