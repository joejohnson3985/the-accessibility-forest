import React, { Component } from 'react';
import './MultipleChoiceItem.scss';

class MultipleChoiceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // handleClick(e) {
  //   e.preventDefault();
  //   let answer = e.target.innerText
  //   console.log(answer)
  //   this.props.checkAnswer(answer);
  // }

  handleClick = () => {
    this.props.checkAnswer(this.props.choice)
  }


  render() {
    return (
      <div>
        <div className='choice-btn' role='button' onClick= {this.handleClick}>{this.props.choice}</div>
      </div>
    )
  }
}

export default MultipleChoiceItem;