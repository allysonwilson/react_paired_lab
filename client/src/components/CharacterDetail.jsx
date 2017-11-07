import React from "react"

const CharacterDetail = (props) => {
  if(!props.character) return(<p>choose a character from above</p>)
  return <div>
      <p>{props.character.name}</p>
      <img src={props.character.image} />
      </div>

}



export default CharacterDetail;
