import React, { Component } from 'react';
import './Forest.scss';

class Forest extends Component {
  constructor(props) {
    super(props);
    this.state ={
    }
  }

  render() {
    let whatToRender;
    if(this.props.forestName) {
      whatToRender = this.props.forestName
    } else {
      whatToRender = 'A nameless forest!!'
    }

    return (
      <div>
        <section className='forest'>
          <table className="trees">
            <caption>{whatToRender} has {this.props.points} correct answers!</caption>
            <tbody>
              <tr>
                {this.props.trees}
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default Forest;