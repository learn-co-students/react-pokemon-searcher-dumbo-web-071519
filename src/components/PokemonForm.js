import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const pokeObject = {
      name: this.state.name,
      stats: [{
        value: this.state.hp,
        name: 'hp'
      }],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      },
      id: 1
    }

    this.props.addPokemon(pokeObject)
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  render() {
    //console.log(this.props.stateStuff)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
        <form className="form-sort-filter">
          <select value={this.props.stateStuff.filter} onChange={e => this.props.changeFilter(e)}>
            <option name="all" value="all" >All</option>
            <option name="grass" value="grass" >Grass</option>
          </select>
          <br></br>
          <label>Name</label>
          <input type="radio" name="name" value="name" checked={this.props.stateStuff.sortBy === "name"} onChange={this.props.changeSort} ></input>
          <label>ID</label>
          <input type="radio" name="id" value="id" checked={this.props.stateStuff.sortBy === "id"} onChange={this.props.changeSort} ></input>
        </form>
      </div>
    )
  }
}

export default PokemonForm
