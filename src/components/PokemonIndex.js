import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemonCollection: [],
    original: []
  }


  componentDidMount(){
  fetch('http://localhost:3000/pokemon')
  .then(resp => resp.json())
  .then(data => this.setState({
    pokemonCollection: data,
    original: data
  }))

}

newPoke=(obj)=>{
  this.setState({
    pokemonCollection: [obj, ...this.state.pokemonCollection],
    original: [obj, ...this.state.original]
  })
}

filterPokes=(e)=>{ 
  let theFiltered = this.state.original.filter(poke=> poke.name.includes(e.target.value)) 
  this.setState({
    pokemonCollection: theFiltered
  })
}


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPoke={this.newPoke}/>
        <br />
        <Search onSearchChange={(e) => this.filterPokes(e)} showNoResults={false} />
        <br/>
        <PokemonCollection pokemonCollection={this.state.pokemonCollection} />
        <br />
        
      </div>
    )
  }
}

export default PokemonPage
