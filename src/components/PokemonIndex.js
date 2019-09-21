import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import PokemonCard from './PokemonCard';

class PokemonIndex extends React.Component {

  state= {
    collection: [],
    search: ""
  }

  searchCallback = (event) => {
    console.log("this is inside searchCallbakc")
    event.preventDefault()
    this.setState({
      search: event.target.value, 
      collection: this.searchHandler(this.state.collection)
    })
  }

  searchHandler = (allPokemon) => {
    const test =  allPokemon.filter((pokemon) => {
      return pokemon.name.includes(this.state.search)
    })
    console.log(test)
    return test
  } 
   
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        {/* <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} /> */}
        <Search onSearchChange={this.searchCallback} value={this.state.search} />
        <br />
        <PokemonCollection collection ={ this.state.collection }/>
        <br />
        <PokemonForm />
      </div>
    )
  }
  
  componentDidMount() {
   return fetch(`http://localhost:3000/pokemon`).then(res => res.json()).then(data => this.setState({collection: data}))
  }

  // componentDidUpdate() {
  //   console.log("right after re-render")
  //   return fetch(`http://localhost:3000/pokemon`).then(res => res.json()).then(this.searchHandler)
  // }
}

export default PokemonIndex
