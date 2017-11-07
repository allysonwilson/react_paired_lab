import React from 'react';
import CharacterSelector from "../components/CharacterSelector";
import CharacterDetail from "../components/CharacterDetail"

class HogwartsContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    };
    this.onCharacterSelect = this.onCharacterSelect.bind(this)
  }

  componentDidMount(){
    const xhr = new XMLHttpRequest();
    const url = "http://hp-api.herokuapp.com/api/characters"

    xhr.open("GET", url)

    xhr.addEventListener("load", () => {
      if (xhr.status !== 200)return;
      const HogwartsCharacters = JSON.parse(xhr.responseText);
      this.setState({ characters: HogwartsCharacters})
    })

  xhr.send()

  }

  onCharacterSelect(index){
    const chosenCharacter = this.state.characters[index]
    console.log(chosenCharacter);
    this.setState({currentCharacter: chosenCharacter})
  }


  render(){
    return (
      <div>
      <h1>This is our Hogwart's Container</h1>
    <CharacterSelector  characters={this.state.characters}
      onCharacterSelect={this.onCharacterSelect}/>
      <CharacterDetail character={this.state.currentCharacter} />
      </div>

    )
  }


}
export default HogwartsContainer;
