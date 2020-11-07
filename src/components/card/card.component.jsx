import React from 'react';
import './card.style.css';

export const Card = (props) => {
  return <div className='card-container'>
    <img alt='monster' src={`${props.monster.pic}?set=set2&size=180x180`} width="100%" height="auto" />
    {/* <img alt='monster' src={`http://robohash.org/${ props.monster.id }?set=set2&size=180x180`} /> */}
    <h2> {props.monster.name} </h2>
    <p> {props.monster.rating}</p>
    {/* <p>
      <input type="checkbox" id={`movie{props.monster.name}`} />
      <label for={`movie{props.monster.name}`}> Watched </label>
    </p> */}
  </div>
}