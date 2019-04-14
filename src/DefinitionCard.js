import React, { Component } from 'react';


class DefinitionCard extends Component {
  constructor(props) {
    super (props);
    this.state = {
      definitions: [],
      currentTerm: 0
    }
  }

  componentDidMount() {
    this.getDefinitions();
  }

  getDefinitions = () => {
    console.log(this.state.currentTerm)
    const termDefinitions = this.props.data.map((term) => term.definition)
    this.setState({
      definitions: termDefinitions
    })
  }

  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    )
  }
}

export default DefinitionCard;