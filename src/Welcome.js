import React, { Component } from 'react';
import './Welcome.scss';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleName = (e) => {
    e.preventDefault();
    console.log(this.state.name)
    this.props.nameForest(this.state.name);
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      name: e.target.value
    })

  }

  render() {
    return (
      <div>
        <form className='name-forest-form'>
          <input className='name-forest-input' value={this.state.name} onChange={this.handleChange} type='text' placeholder='Name Your Forest'/>
          <input className ='submit-btn' type='submit' onClick = {this.handleName}/>
        </form>
      </div>
    )
  }
}

export default Welcome;
