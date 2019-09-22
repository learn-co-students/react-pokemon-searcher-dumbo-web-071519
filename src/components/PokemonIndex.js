import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchresults: []
  }

  handleSearch = (e) => {
    let searchWord = e.target.value.toLowerCase()
    this.setState({
      searchresults: this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchWord))
    })
  }

  addPokemon = (pokemonObj) => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pokemonObj)
    }
    fetch('http://localhost:3000/pokemon', config)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pokemons: [...this.state.pokemons, data],
          searchresults: [...this.state.pokemons, data]
        })
      })
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res=> res.json())
      .then(data => { this.setState({ pokemons: data, searchresults: data})})
  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e) => this.handleSearch(e)} showNoResults={false} />
        {/* <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} /> */}
        <br />
        <PokemonCollection pokemons={this.state.searchresults} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    )
  }
}

export default PokemonPage
