import React from "react"

const CharacterSelector = (props) => {

  const characterOptions = props.characters.map((character, index) =>{
    return <option key={index} value={index}>{character.name}</option>
  })

  function handleChange(event){
    props.onCharacterSelect(event.target.value)
  }

  return (
    <select defaultValue="default" name="character-selector"
      onChange={handleChange} id="character-selector">
      <option disabled value="default">Choose a Character</option>
      {characterOptions}
    </select>

  )


}

export default CharacterSelector;
