import React, { Component } from 'react';
import './Welcome.scss';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className='form-container'>
        <form className='name-forest-form'>
          <input className='name-forest-input' type='text' placeholder='Name Your Forest'/>
          <input className ='submit-btn' type='submit' />
        </form>
      </div>
    )
  }
}

export default Welcome;
