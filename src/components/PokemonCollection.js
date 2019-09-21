import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  // state = {
  //   pokemonCollection: this.props.collection 
  // }

  

  populatePokemons = (pokemons) => {
    return pokemons.map((pokemon) => {
      return <PokemonCard pokemon={pokemon} />
    })
  }
  
  
  render() {
    console.log(this.state, "this means a rerender of all pokes happened")
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
        <br/>
        {this.props.collection.map((pokemon) => { return <PokemonCard pokemon={ pokemon } />}  )}
      </Card.Group>
      </div>
    )
  }


}

export default PokemonCollection
