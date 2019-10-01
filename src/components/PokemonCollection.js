import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  sort(sortArg){
    this.props.pokeSort(sortArg);
  }

  render() {
    return <div>
      <div className="sort-section">
        <h1>Sort by</h1>
        <button className="pill" id='name' onClick={this.sort.bind(this,'')}>Reset</button>
        <button className="pill" id='name' onClick={this.sort.bind(this,'name')}>Name</button>
        <button className="pill" id='type' onClick={this.sort.bind(this,'types')}>Type</button>
      </div>

      <Card.Group itemsPerRow={6}>
        {this.props.allPokemons.map(pokemon => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} toggleImage={this.props.toggleImage} />
        })}
      </Card.Group>
    </div>
  }
}

export default PokemonCollection
