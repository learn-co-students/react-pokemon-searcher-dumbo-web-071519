import React from 'react'
import { Card } from 'semantic-ui-react'




class PokemonCard extends React.Component {



  state = {
    pokemon_image: this.props.pokemon.sprites.front
  }

flipImage = () => {
  if (this.state.pokemon_image === this.props.pokemon.sprites.front)
  return this.setState({pokemon_image: this.props.pokemon.sprites.back}) 
  if (this.state.pokemon_image === this.props.pokemon.sprites.back)
  return this.setState({pokemon_image: this.props.pokemon.sprites.front}) 
}



  render() {
    return (
      <Card onClick={this.flipImage}>
        <div>
          <div className="image">
            <img src={this.state.pokemon_image}alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
