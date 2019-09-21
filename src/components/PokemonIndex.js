import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  // store a copy of our original data so we can operate search, filter, and sort correctly
  state = {
    pokemonCollection: [],
    original: [],
    filter: "all",
    sortBy: "all"
  }

  // fetch our data when the page loads for the 1st time
  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(result => result.json())
    .then(data => this.setState({
      pokemonCollection: data, 
      original: data
    }))
  }


  // sent down as props, called when we submit the form to add a pokemon to original data
  addPokemon = (pokeObject) => {
    const newArr = [pokeObject, ...this.state.original]
    this.setState({
      pokemonCollection: newArr,
      original: newArr
    })
  }
// *********************** FILTER ***********************
// sent down as props, called when we change the filter
// calls filter AND sort so we can properly sort the pokemon after a filter 
  changeFilter = (event) => {
    const filteredArr = this.handleFilter(event.target.value)
    const sortedArr = this.handleSort(this.state.sortBy, filteredArr)
    this.setState({
      filter: event.target.value,
      pokemonCollection: sortedArr
    })
  }
// delegates whether to filter by grass type or filter by id (the pokemon are already in ID order from the fetch)
  handleFilter = (filterStatus) => {
    console.log('filtering...')
    if (filterStatus !== "all") {
      return this.state.original.filter((poke) => {
        return poke.types.includes("grass")
      })
    } else {
      return this.state.original
    }
  }

  // *********************** SORT ***************************
 
// passed down as props, called when we change the sort
  changeSort = (event) => {
    const newArr = this.handleSort(event.target.value, this.state.pokemonCollection)
    this.setState({
      sortBy: event.target.value,
      pokemonCollection: newArr
    })
  }
// handles which sort method to use by looking at the event data passed in from above
// we pass in the pokemon to sort because we might need to sort already filtered pokemon
  handleSort = (sortBy, pokesToSort) => {
    console.log('sorting...')
    if(sortBy === "name"){
      return this.sortPokesByName(pokesToSort);
    } else{
      return this.sortPokesById(pokesToSort);
    }
  }
// implementation of sort functions according to name/id
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
