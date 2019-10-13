import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'



class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: '',
    searchedPokemon: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({
      pokemon: data,
      searchTerm: '',
      searchedPokemon: data
    }))
  }

  handleSubmitt=(e, name)=>{
    e.preventDefault()
    this.setState({
      pokemon: [...this.state.pokemon, name]
    })
    console.log("handle submit", name)  
  }

  searchUpdate = (event)=>{
    console.log(event.target.value)
    return this.setState({
      searchTerm: event.target.value}, this.findPokemon)
  }


  findPokemon=()=>{
const filterPokemon = this.state.pokemon.filter((pokemon)=>{
  return pokemon.name.includes(this.state.searchTerm)
})
return this.setState({
  searchedPokemon: filterPokemon
})
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.searchUpdate} showNoResults={false} value={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemon={this.state.searchedPokemon} />
        <br />
        <PokemonForm handleSubmitt={this.handleSubmitt}/>
      </div>
    )
  }
}

export default PokemonPage
