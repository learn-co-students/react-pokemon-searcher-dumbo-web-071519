import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    allPokemons: [],
    searchValue: ''
  }
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(allPokemons => this.setState({allPokemons}))
  }

  handleSearch = (e, {value}) => {
    this.setState({
      searchValue: value
    })
  }

  toggleImage = (pokemon) => {
    const collection = this.state.allPokemons,
          idx = collection.indexOf(pokemon)

    this.setState({ //check how this was done by someone else
      allPokemons: [
        ...collection.slice(0, idx),
        {...pokemon, isClicked: !pokemon.isClicked},
        ...collection.slice(idx + 1)
      ]
    })
  }

  addPokemon = (pokemon) => {
    this.setState({
      allPokemons: [...this.state.allPokemons, pokemon]
    })
  }

  pokeSort = (sortingArg) => {
    let pokeSorted = this.state.allPokemons

    if (sortingArg === 'name'){
      pokeSorted.sort((a, b) => (a.name > b.name) ? 1 : -1)
    } else if (sortingArg === 'types'){
      pokeSorted.sort((a, b) => (a.types > b.types) ? 1 : -1)
    } else {
      pokeSorted.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
      
    this.setState({ allPokemons: pokeSorted})
  }

  render() {
    const pokemonCollection = this.state.allPokemons.filter(pokemon => pokemon.name.includes(this.state.searchValue)
    )

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection allPokemons={pokemonCollection} toggleImage={this.toggleImage} pokeSort={this.pokeSort}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
