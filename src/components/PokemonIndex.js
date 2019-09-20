import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state ={
    pokemons: []
  }
  handleSearch = (e) => {
    console.dir(e)
  }
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e) => this.handleSearch(e), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={ this.state.pokemons } />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
