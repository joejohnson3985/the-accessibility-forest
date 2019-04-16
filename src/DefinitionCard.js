import React from 'react';
import './DefinitionCard.scss';


const DefinitionCard = (props) => {
  return (
    <div className='definition-container'>
      <h2>Definition</h2>
      <h3>{props.termType}</h3>
      <p>{props.definition}</p>
    </div>
  )
}

export default DefinitionCard;