import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemonCollection: []
  }


  componentDidMount(){

  fetch('http://localhost:3000/pokemon')
  .then(resp => resp.json())
  .then(data => this.setState({
    pokemonCollection: data
  }))


}
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br/>
        <PokemonCollection pokemonCollection={this.state.pokemonCollection} />
        <br />
        
      </div>
    )
  }
}

export default PokemonPage
