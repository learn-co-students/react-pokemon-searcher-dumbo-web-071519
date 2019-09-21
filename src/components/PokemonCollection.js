import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {

  pokemon=() => {return this.props.pokemonCollection.map(poke => {
      return (<PokemonCard poke={poke} key={poke.id}/>)
    })
}
  render() {
    
    return (
      <Card.Group itemsPerRow={6}>
        {this.pokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection;
