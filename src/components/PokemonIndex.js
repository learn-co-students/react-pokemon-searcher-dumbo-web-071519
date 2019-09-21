import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonPage extends React.Component {
  state ={
    pokemons: [],
    searchresults: []
  }

  handleSearch = (e) => {
    let searchWord = e.target.value.toLowerCase()
    //! Here, our searchresults state will always be filtered out of our full pokemon list in our pokemons state
    //! This way we are able to never change our single source of truth
    this.setState({
      searchresults: this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchWord))
    })
  }
  //! This is our callbackfunction given to our child
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
  //! Always put our initla fetch request in our componentDidMount
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data,
        searchresults: data
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={ (e) => this.handleSearch(e) } showNoResults={false} />
        <br />
        <PokemonCollection pokemons={ this.state.searchresults } />
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
