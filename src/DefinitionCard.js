import React from 'react';


const DefinitionCard = (props) => {
  return (
    <div>
      <h2>Definition</h2>
      <h3>{props.termType}</h3>
      <p>{props.definition}</p>
    </div>
  )
}

export default DefinitionCard;