import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''}




updateName=(e)=> {
this.setState({
  name: e.target.value
})
}

updateHp=(e)=> {
  this.setState({
    hp: e.target.value
  })
  }

  updateFrontUrl=(e)=> {
    this.setState({
      frontUrl: e.target.value
    })
    }

    updateBackUrl=(e)=> {
      this.setState({
        backUrl: e.target.value
      })
      }



  render() {


    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e)=>this.props.handleSubmitt(e, this.state)} >
          <Form.Group widths="equal">
            <Form.Input onChange={this.updateName} fluid label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input onChange={this.updateHp}  fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input onChange={this.updateFrontUrl}  fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input onChange={this.updateBackUrl}  fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
