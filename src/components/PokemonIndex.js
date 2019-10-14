import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons : [],
    searchValue : []
   
  }
  

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(data => this.setState({pokemons : data}))
  }

  handleSearch = (e,{value}) => {
    this.setState({
      searchValue : value
    })
  }

  
  desiredPokemon = () => {
   return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchValue))
  }

  postPokemon = (pokemon) => {
    fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      body: JSON.stringify(pokemon),
      headers: {'Content-Type':'application/json'}
    })
    .then(resp => resp.json())
    .then(newPok => {
      console.log(newPok);
      this.setState({
        pokemons : [...this.state.pokemons, newPok]
      })
    })
  }


  
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm postPokemon = {this.postPokemon} />
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons = {this.desiredPokemon()} />
      </div>
    )
  }
}

export default PokemonPage
