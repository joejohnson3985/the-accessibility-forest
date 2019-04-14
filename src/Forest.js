import React, { Component } from 'react';
import './Forest.scss';

class Forest extends Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    return (
      <div>
        <section className='forest'>
          <table className="trees">
            <caption>{this.props.forestName}</caption>
            <tbody>
              <tr>
                <td>Tree</td>
                <td>Tree</td>
                <td>Tree</td>
                <td>Tree</td>
                <td>Tree</td>
                <td>Tree</td>
                <td>Tree</td>
                <td>Tree</td>
                <td>Tree</td>
                <td>Tree</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default Forest;