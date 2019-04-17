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
    this.props.nameForest(this.state.name);
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })

  }

  render() {
    return (
      <div>
        <form className='name-forest-form' onSubmit={this.handleName}>
          <input className='name-forest-input' value={this.state.name} onChange={this.handleChange} type='text' placeholder='Name Your Forest'/>
          <input className ='submit-btn' type='submit' />
        </form>
      </div>
    )
  }
}

export default Welcome;
