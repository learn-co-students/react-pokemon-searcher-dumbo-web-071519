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
  //! We need to keep track of this to have CONTROLLED FORM apparently
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //! When this form is submitted...
  handleSubmit = () => {
    const { name, hp, frontUrl, backUrl } = this.state
    //! Check if there is a name and that hp is a valid number
    if (!parseInt(hp, 10) || !name) {
      //! Else, throw and error...
      alert('Something is wrong with your form!! 😕')
      return
    }
    //! Set up Pokemon Object into the correct format
    const pokemonObj = {
      "name": name.toLowerCase(),
      "stats": [
        {
          "value": parseInt(hp, 10),
          "name": "hp"
        }
      ],
      "sprites": {
        "front": frontUrl,
        "back": backUrl
      }
    }
    //! Reseting out state is also reseting out form
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
    //! call our parent callback function to make this POST request
    this.props.addPokemon(pokemonObj)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

