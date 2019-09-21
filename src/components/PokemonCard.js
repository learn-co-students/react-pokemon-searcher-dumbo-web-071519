import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    cardFront: true
  }
  //! Toggling if we wanna see pokebutts or not
  flipCard = () => {
    this.setState({
      cardFront: !this.state.cardFront
    })
  }
  render() {
    return (
      <Card>
        <div onClick= {this.flipCard}>
          <div className="image">
            <img alt="oh no!" src={this.state.cardFront ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { this.props.pokemon.stats.find( stat => stat.name === "hp").value }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
