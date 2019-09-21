import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemonCollection: [],
    original: [],
    filter: "all",
    sortBy: "all"
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(result => result.json())
    .then(data => this.setState({
      pokemonCollection: data, 
      original: data
    }))
  }

  filterPokemons = (event) => {
    const pokemons = this.state.original.filter(pokemon => pokemon.name.includes(event.target.value))
    this.setState({pokemonCollection: pokemons})
  }

  addPokemon = (pokeObject) => {
    const newArr = [pokeObject, ...this.state.original]
    this.setState({
      pokemonCollection: newArr,
      original: newArr
    })
  }

  changeFilter = (event) => {
    const filteredArr = this.handleFilter(event.target.value)
    const sortedArr = this.handleSort(this.state.sortBy, filteredArr)
    this.setState({
      filter: event.target.value,
      pokemonCollection: sortedArr
    })
  }

  handleFilter = (filterStatus) => {
    console.log('filtering...')
    if (filterStatus !== "all"){
     return this.state.original.filter((poke) => {
        return poke.types.includes("grass")
      })
    } else{
      return this.state.original
    }
  }

  changeSort = (event) => {
    const newArr = this.handleSort(event.target.value, this.state.pokemonCollection)
    this.setState({
      sortBy: event.target.value,
      pokemonCollection: newArr
    })
  }

  handleSort = (sortBy, pokesToSort) => {
    console.log('sorting...')
    if(sortBy === "name"){
      return this.sortPokesByName(pokesToSort);
    } else{
      return this.sortPokesById(pokesToSort);
    }
  }

  sortPokesById = (pokesToSort) => {
    return pokesToSort.sort(this.compareIDs)
  }

  sortPokesByName = (pokesToSort) =>{
    return pokesToSort.sort(this.compareNames)
  }

  compareNames = (a,b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  }
  compareIDs = (a,b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
  }

  render() {
    // console.log(this.state.pokemonCollection)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm stateStuff={this.state}  changeFilter={this.changeFilter}  changeSort={this.changeSort} addPokemon={this.addPokemon}/>
        <br />
        <Search onSearchChange={this.filterPokemons} showNoResults={false} />
        <br />
        <PokemonCollection  pokemons={this.state.pokemonCollection}/>
      </div>
    )
  }
}

export default PokemonPage
