import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  //! We are given the pokemon list from our parents and here we make them into componets
  renderPokemonCards = () => {
    return this.props.pokemons.map( (pokemon) => {return <PokemonCard key={pokemon.id} pokemon={pokemon}/>} ) 
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        { this.renderPokemonCards() }
      </Card.Group>
    )
  }
}

export default PokemonCollection
